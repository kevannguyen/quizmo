import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutMain } from '../layouts/LayoutMain/LayoutMain';

const Home = lazy(() => import('../pages/Home/Home'));
const CollectionList = lazy(() => import('../pages/CollectionList/Collection'));
const CollectionAdd = lazy(
    () => import('../pages/CollectionAdd/CollectionAdd')
);
const CollectionPage = lazy(
    () => import('../pages/CollectionPage/CollectionPage')
);
const CollectionQuiz = lazy(
    () => import('../pages/CollectionQuiz/CollectionQuiz')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const AppRouter = () => {
    return (
        <LayoutMain>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/collection"
                        element={<CollectionList />}
                    ></Route>
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
            </BrowserRouter>
        </LayoutMain>
    );
};

export default AppRouter;
