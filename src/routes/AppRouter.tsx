import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CollectionList from '../pages/CollectionList/Collection';
import CollectionAdd from '../pages/CollectionAdd/CollectionAdd';
import CollectionPage from '../pages/CollectionPage/CollectionPage';
import CollectionQuiz from '../pages/CollectionQuiz/CollectionQuiz';
import NotFound from '../pages/NotFound/NotFound';

export const AppRouter = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default AppRouter;
