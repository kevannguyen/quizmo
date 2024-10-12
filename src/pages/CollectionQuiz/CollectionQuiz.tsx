/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { COLLECTION_SERVICE } from '../../api/services/collectionService';
import {
    QuizQuestion,
    QuizResponse,
} from '@/api/services/collectionService/interfaces';
import { memo, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { atom, useAtom } from 'jotai';
import _ from 'lodash';

const selectedResponsesAtom = atom<(number | null)[] | null>(null);
const selectedResponseIndexAtom = (questionIndex: number) =>
    atom(
        (get) => get(selectedResponsesAtom)?.[questionIndex] ?? null,
        (get, set, newSelectedResponseIndex) => {
            const selectedResponses = get(selectedResponsesAtom);
            if (!selectedResponses) return;

            const newSelectedRespones = [...selectedResponses];
            newSelectedRespones[questionIndex] =
                newSelectedResponseIndex as any;
            set(selectedResponsesAtom, newSelectedRespones);
        }
    );
// const quizFinishedAtom = atom<boolean>((get) => {get(selectedResponsesAtom)})

// Shuffles list in-place
const shuffleList = (items: unknown[]) => {
    // Fisher-Yates Shuffle Algorithm
    for (let i = items.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap the current item with the random item
        [items[i], items[randomIndex]] = [items[randomIndex], items[i]];
    }
};

export const CollectionQuiz = () => {
    const { collectionId = '' } = useParams();
    const {
        isFetching: collectionIsFetching,
        isError: collectionIsError,
        data: collectionData,
    } = useQuery({
        queryKey: ['collection', collectionId],
        queryFn: COLLECTION_SERVICE.getCollection(collectionId),
        enabled: !!collectionId,
        retry: 0,
    });
    const [selectedResponses, setSelectedResponses] = useAtom(
        selectedResponsesAtom
    );
    const shuffledQuestions = useMemo(() => {
        if (!collectionData || collectionData?.questions?.length === 0) {
            return null;
        }

        const questions = _.cloneDeep(collectionData.questions);
        shuffleList(questions);
        for (let i = 0; i < questions.length; i += 1) {
            shuffleList(questions[i].responses);
        }

        return questions;
    }, [JSON.stringify(collectionData)]);

    const isQuizFinished =
        (selectedResponses ?? [null]).filter((response) => response === null)
            .length === 0;

    console.log('lolol isquizfinished = ', isQuizFinished);

    if (isQuizFinished) {
        console.log('lolol quiz finished!');
    }

    useEffect(() => {
        if (!collectionData || collectionData?.questions?.length === 0) {
            setSelectedResponses(null);
            return;
        }

        // Initialize quiz to no selected responses
        const selectedResponses = [];
        for (let i = 0; i < collectionData.questions.length; i += 1) {
            selectedResponses.push(null);
        }

        setSelectedResponses(selectedResponses);

        console.log('lolol shuffledQuestions = ', shuffledQuestions);

        return () => {
            setSelectedResponses(null);
        };
    }, [JSON.stringify(shuffledQuestions)]);

    return (
        <div className="flex flex-col gap-8">
            {collectionIsError && <div>Error loading page</div>}
            {shuffledQuestions &&
                shuffledQuestions.map(({ question, responses }, index) => (
                    <QuizCard
                        key={`${question}-${index}`}
                        question={question}
                        responses={responses}
                        questionIndex={index}
                    ></QuizCard>
                ))}
        </div>
    );
};

const QuizCard = memo(
    ({
        question,
        responses,
        questionIndex,
    }: QuizQuestion & { questionIndex: number }) => {
        return (
            <div tabIndex={-1}>
                <article className="shadow-md bg-card rounded flex flex-col justify-between m-0 mx-auto max-w-[52.5rem] min-h-[25.75rem] py-6 px-8 transition-all duration-500">
                    <div className="box-border text-xl break-words mb-16">
                        {question}
                    </div>
                    <div className="flex flex-col gap-4">
                        <section className="text-sm font-medium">
                            Select the correct answer
                        </section>
                        <div className="flex flex-col w-full gap-6 sm:grid sm:grid-cols-2 sm:auto-rows-fr">
                            {responses.map(
                                ({ response, correct }, responseIndex) => (
                                    <QuizResponseOption
                                        key={response}
                                        response={response}
                                        correct={correct}
                                        questionIndex={questionIndex}
                                        responseIndex={responseIndex}
                                    ></QuizResponseOption>
                                )
                            )}
                        </div>
                    </div>
                </article>
            </div>
        );
    },
    (prevProps, nextProps) =>
        JSON.stringify(prevProps.responses) ===
        JSON.stringify(nextProps.responses)
);

const QuizResponseOption = ({
    response,
    questionIndex,
    responseIndex,
}: QuizResponse & {
    questionIndex: number;
    responseIndex: number;
}) => {
    const selectedResponseIndexAtomMemo = useMemo(
        () => selectedResponseIndexAtom(questionIndex),
        [questionIndex]
    );
    const [selectedResponseIndex, setSelectedResponseIndex] = useAtom(
        selectedResponseIndexAtomMemo
    );

    const handleSelect = () => {
        setSelectedResponseIndex(
            selectedResponseIndex === responseIndex ? null : responseIndex
        );
    };

    return (
        <div
            className={cn(
                'p-4 rounded border border-input hover:bg-accent hover:text-accent-foreground cursor-pointer flex-grow',
                {
                    'bg-blue-100 border-blue-300 hover:bg-blue-100':
                        selectedResponseIndex === responseIndex,
                }
            )}
            onClick={handleSelect}
            tabIndex={0}
        >
            {response}
        </div>
    );
};

export default CollectionQuiz;
