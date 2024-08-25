import { useQuery } from '@tanstack/react-query';
// Apis
import { FetchResponse } from '../apis/apiClient';
import { fetchScreenshots } from '../apis/screenshotsApi';
// Types
import { Screenshot } from '../types/screenshot';

export function useFetchScreenshots(gameId: number) {
    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: (): Promise<FetchResponse<Screenshot>> => {
            return fetchScreenshots(gameId)
        },
    });
}