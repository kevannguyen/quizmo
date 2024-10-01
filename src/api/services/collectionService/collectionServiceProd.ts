import { COLLECTION_SERVICE_MOCK } from './collectionServiceMock';
import { CollectionServiceApi } from './interfaces';

export const COLLECTION_SERVICE_PROD: CollectionServiceApi = {
    getCollection: (collectionId: string) =>
        COLLECTION_SERVICE_MOCK.getCollection(collectionId),
};
