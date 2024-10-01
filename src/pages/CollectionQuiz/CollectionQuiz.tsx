/* eslint-disable @typescript-eslint/no-unused-vars */

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { COLLECTION_SERVICE } from '../../api/services/collectionService';

export const CollectionQuiz = () => {
    const { collectionId = '' } = useParams();
    const {
        isFetching: collectionIsFetching,
        isError: collectionIsError,
        data: collectionData,
    } = useQuery({
        queryKey: ['collection', collectionId],
        queryFn: COLLECTION_SERVICE.getCollection(collectionId),
        retry: 0,
    });

    return (
        <div>
            <h1>{`CollectionQuiz ${collectionId} page`}</h1>
            {collectionIsError && <div>Error loading page</div>}
            {collectionData && JSON.stringify(collectionData)}
        </div>
    );
};

export default CollectionQuiz;
