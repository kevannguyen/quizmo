/* eslint-disable @typescript-eslint/no-unused-vars */

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { COLLECTION_SERVICE } from '../../api/services/collectionService';
import {
    QuizQuestion,
    QuizResponse,
} from '@/api/services/collectionService/interfaces';
import { memo } from 'react';
import { cn } from '@/lib/utils';

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

    const questions = collectionData?.questions ?? [];

    console.log('lolol collectionData = ', collectionData);

    return (
        <div className="flex flex-col gap-8">
            {collectionIsError && <div>Error loading page</div>}
            {collectionData &&
                questions.map(({ question, responses }, index) => (
                    <QuizCard
                        key={`${question}-${index}`}
                        question={question}
                        responses={responses}
                    ></QuizCard>
                ))}
        </div>
    );
};

const QuizCard = memo(
    ({ question, responses }: QuizQuestion) => {
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
                            {responses.map(({ response, correct }) => (
                                <QuizResponseOption
                                    key={response}
                                    response={response}
                                    correct={correct}
                                ></QuizResponseOption>
                            ))}
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
    correct,
    selected,
}: QuizResponse & { selected?: boolean }) => {
    return (
        <div
            className={cn(
                'p-4 rounded border border-input hover:bg-accent hover:text-accent-foreground cursor-pointer flex-grow',
                { 'bg-blue-100 border-blue-300 hover:bg-blue-100': selected }
            )}
        >
            {response}
        </div>
    );
};

export default CollectionQuiz;
