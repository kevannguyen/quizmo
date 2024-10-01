/* eslint-disable @typescript-eslint/no-unused-vars */
import { mockedApiCall } from '../../common/utils';
import { MOCK_COLLECTION_STANDARD } from '../../mockData/collectionServiceMockData';
import { CollectionServiceApi, QuizCollection } from './interfaces';

export const COLLECTION_SERVICE_MOCK: CollectionServiceApi = {
    getCollection: (collectionId: string) => () =>
        mockedApiCall<QuizCollection, [string]>(
            {
                fn: (collectionId: string) => {
                    if (collectionId !== 'test-collection-standard') {
                        throw new Error(
                            `Invalid collectionId: '${collectionId}'`
                        );
                    }
                    return MOCK_COLLECTION_STANDARD;
                },
                delayMs: 1000,
            },
            collectionId
        ),
};
