import { useParams } from 'react-router-dom';

export const CollectionPage = () => {
    const { collectionId } = useParams();

    return (
        <div>
            <h1>{`CollectionPage ${collectionId} page`}</h1>
        </div>
    );
};

export default CollectionPage;
