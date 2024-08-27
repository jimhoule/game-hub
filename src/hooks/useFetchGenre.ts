// Hooks
import { useFetchGenres } from './useFetchGenres';
// Types
import { Genre } from '../types/genre';

export function useFetchGenre(id: number): Genre {
  const { data } = useFetchGenres();

  const genre = data?.results.find((genre: Genre): boolean => {
    return genre.id === id;
  });

  return genre as Genre;
}
