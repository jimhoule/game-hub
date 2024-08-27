import { useQuery } from '@tanstack/react-query';
// Apis
import { fetchGenres } from '../apis/genresApi';

export function useFetchGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    // 24h
    staleTime: 24 * 60 * 60 * 1000,
  });
}
