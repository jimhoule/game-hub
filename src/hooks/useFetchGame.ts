import { useQuery } from '@tanstack/react-query';
// Apis
import { fetchGameBySlug } from '../apis/gamesApi';
// Types
import { Game } from '../types/game';

export function useFetchGame(slug: string) {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: (): Promise<Game> => {
      return fetchGameBySlug(slug);
    },
  });
}
