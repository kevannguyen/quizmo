export interface CollectionServiceApi {
    getCollection: (collectionId: string) => () => Promise<QuizCollection>;
}

export interface QuizCollection {
    id: string;
    name: string;
    questions: QuizQuestion[];
}

export interface QuizQuestion {
    question: string;
    responses: QuizResponse[];
}

export interface QuizResponse {
    response: string;
    correct?: boolean;
}
