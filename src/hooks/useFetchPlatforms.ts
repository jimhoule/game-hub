import { useQuery } from '@tanstack/react-query';
// Apis
import { fetchPlatforms } from '../apis/platformsApi';

export function useFetchPlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    // 24h
    staleTime: 24 * 60 * 60 * 1000,
  });
}
