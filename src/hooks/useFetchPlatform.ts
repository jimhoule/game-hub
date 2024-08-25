// Hooks
import { useFetchPlatforms } from './useFetchPlatforms';
// Types
import { Platform } from '../types/platform';

export function useFetchPlatform(id: number): Platform {
    const { data } = useFetchPlatforms();

    const platform = data?.results.find((platform: Platform): boolean => {
        return platform.id === id;
    });

    return platform as Platform;
}