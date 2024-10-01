import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import AppRouter from './routes/AppRouter';

export const App = () => {
    return (
        <MantineProvider>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
            </QueryClientProvider>
        </MantineProvider>
    );
};

export default App;
