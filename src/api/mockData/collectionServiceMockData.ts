import { QuizCollection } from '../services/collectionService/interfaces';

export const MOCK_COLLECTION_EMPTY: QuizCollection = {
    id: 'test-collection-empty',
    name: 'Empty Test Collection',
    questions: [],
};

export const MOCK_COLLECTION_STANDARD: QuizCollection = {
    id: 'test-collection-standard',
    name: 'Standard Test Collection',
    questions: [
        {
            question: 'What is the medical term for high blood pressure?',
            responses: [
                { response: 'Hypotension' },
                { response: 'Hypertension', correct: true },
                { response: 'Bradycardia' },
                { response: 'Tachycardia' },
            ],
        },
        {
            question: "What does the prefix 'hemi-' mean?",
            responses: [
                { response: 'Whole' },
                { response: 'Half', correct: true },
                { response: 'Three' },
                { response: 'One-fourth' },
            ],
        },
        {
            question: "What is the meaning of 'cyanosis'?",
            responses: [
                { response: 'Yellowing of the skin' },
                { response: 'Blue discoloration of the skin', correct: true },
                { response: 'Redness of the skin' },
                { response: 'Darkening of the skin' },
            ],
        },
        {
            question:
                'Which medical term refers to the surgical removal of a body part?',
            responses: [
                { response: 'Excision', correct: true },
                { response: 'Incision' },
                { response: 'Injection' },
                { response: 'Infiltration' },
            ],
        },
        {
            question: 'What is the medical term for difficulty breathing?',
            responses: [
                { response: 'Dyspnea', correct: true },
                { response: 'Apnea' },
                { response: 'Tachypnea' },
                { response: 'Bradypnea' },
            ],
        },
        {
            question:
                "Which of the following means 'inflammation of the liver'?",
            responses: [
                { response: 'Gastritis' },
                { response: 'Hepatitis', correct: true },
                { response: 'Nephritis' },
                { response: 'Carditis' },
            ],
        },
        {
            question: "What does the suffix '-ectomy' mean?",
            responses: [
                { response: 'Surgical repair' },
                { response: 'Surgical removal', correct: true },
                { response: 'Study of' },
                { response: 'Condition of' },
            ],
        },
        {
            question:
                'What is the medical term for an abnormally low heart rate?',
            responses: [
                { response: 'Bradycardia', correct: true },
                { response: 'Tachycardia' },
                { response: 'Arrhythmia' },
                { response: 'Fibrillation' },
            ],
        },
        {
            question: "What does the term 'hemiplegia' refer to?",
            responses: [
                {
                    response: 'Paralysis of one side of the body',
                    correct: true,
                },
                { response: 'Total body paralysis' },
                { response: 'Paralysis of the lower limbs' },
                { response: 'Paralysis of the upper limbs' },
            ],
        },
        {
            question: "What does the prefix 'brady-' mean?",
            responses: [
                { response: 'Fast' },
                { response: 'Slow', correct: true },
                { response: 'Normal' },
                { response: 'Above' },
            ],
        },
    ],
};
