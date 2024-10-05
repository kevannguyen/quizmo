import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';
import { LayoutMain } from '../layouts/LayoutMain/LayoutMain';

const Home = loadable(() => import('../pages/Home/Home'));
const CollectionList = loadable(
    () => import('../pages/CollectionList/Collection')
);
const CollectionAdd = loadable(
    () => import('../pages/CollectionAdd/CollectionAdd')
);
const CollectionPage = loadable(
    () => import('../pages/CollectionPage/CollectionPage')
);
const CollectionQuiz = loadable(
    () => import('../pages/CollectionQuiz/CollectionQuiz')
);
const NotFound = loadable(() => import('../pages/NotFound/NotFound'));

export const AppRouter = () => {
    return (
        <LayoutMain>
            <Routes>
                <Route path="/collection" element={<CollectionList />}></Route>
                <Route
                    path="/collection/add"
                    element={<CollectionAdd />}
                ></Route>
                <Route
                    path="/collection/:collectionId"
                    element={<CollectionPage />}
                ></Route>
                <Route
                    path="/collection/:collectionId/quiz"
                    element={<CollectionQuiz />}
                ></Route>

                {/* Default home page */}
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </LayoutMain>
    );
};

export default AppRouter;
