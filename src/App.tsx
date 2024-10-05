import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import AppRouter from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
