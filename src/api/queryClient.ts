import { QueryClient } from '@tanstack/react-query';

/** Dev use only. Toggles prod/mock data. */
export const MOCK_API_MODE = false;

export const queryClient = new QueryClient();
