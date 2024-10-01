import { useParams } from 'react-router-dom';
import { NavigationMenuDemo } from './example';

export const CollectionPage = () => {
    const { collectionId } = useParams();

    return (
        <div>
            <h1>{`CollectionPage ${collectionId} page`}</h1>
            <NavigationMenuDemo></NavigationMenuDemo>
        </div>
    );
};

export default CollectionPage;
