import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import AppRouter from './routes/AppRouter';

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouter />
        </QueryClientProvider>
    );
};

export default App;
