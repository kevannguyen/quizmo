import { QuizCollection } from '../services/collectionService/interfaces';

export const MOCK_COLLECTION_EMPTY: QuizCollection = {
    id: 'test-collection-empty',
    questions: [],
};

export const MOCK_COLLECTION_STANDARD: QuizCollection = {
    id: 'test-collection-standard',
    questions: [
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE', correct: true },
                { response: 'Answer RED' },
                { response: 'Answer GREEN' },
                { response: 'Answer YELLOW' },
            ],
        },
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE' },
                { response: 'Answer RED', correct: true },
                { response: 'Answer GREEN' },
                { response: 'Answer YELLOW' },
            ],
        },
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE' },
                { response: 'Answer RED' },
                { response: 'Answer GREEN', correct: true },
                { response: 'Answer YELLOW' },
            ],
        },
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE' },
                { response: 'Answer RED' },
                { response: 'Answer GREEN' },
                { response: 'Answer YELLOW', correct: true },
            ],
        },
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE', correct: true },
                { response: 'Answer RED' },
                { response: 'Answer GREEN' },
                { response: 'Answer YELLOW' },
            ],
        },
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE' },
                { response: 'Answer RED', correct: true },
                { response: 'Answer GREEN' },
                { response: 'Answer YELLOW' },
            ],
        },
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE' },
                { response: 'Answer RED' },
                { response: 'Answer GREEN', correct: true },
                { response: 'Answer YELLOW' },
            ],
        },
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE' },
                { response: 'Answer RED' },
                { response: 'Answer GREEN' },
                { response: 'Answer YELLOW', correct: true },
            ],
        },
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE', correct: true },
                { response: 'Answer RED' },
                { response: 'Answer GREEN' },
                { response: 'Answer YELLOW' },
            ],
        },
        {
            question:
                'This is an example question. What is the answer to this sample question?',
            responses: [
                { response: 'Answer BLUE' },
                { response: 'Answer RED', correct: true },
                { response: 'Answer GREEN' },
                { response: 'Answer YELLOW' },
            ],
        },
    ],
};
