import { useQuery } from '@tanstack/react-query';
// Apis
import { FetchResponse } from '../apis/apiClient';
import { fetchTrailers } from '../apis/trailersApi';
// Types
import { Trailer } from '../types/trailer';

export function useFetchTrailers(gameId: number) {
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: (): Promise<FetchResponse<Trailer>> => {
      return fetchTrailers(gameId);
    },
  });
}
