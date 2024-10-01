import { MOCK_API_MODE } from '../../queryClient';
import { COLLECTION_SERVICE_MOCK } from './collectionServiceMock';
import { COLLECTION_SERVICE_PROD } from './collectionServiceProd';
import { CollectionServiceApi } from './interfaces';

export const COLLECTION_SERVICE: CollectionServiceApi = MOCK_API_MODE
    ? COLLECTION_SERVICE_MOCK
    : COLLECTION_SERVICE_PROD;
