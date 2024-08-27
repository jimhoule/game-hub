import { List, ListItem, Heading } from '@chakra-ui/react';
// Components
import { GenreItem } from './GenreItem';
import { GenreItemSkeleton } from './GenreItemSkeleton';
import { GenreItemContainer } from './GenreItemContainer';
// Hooks
import { useFetchGenres } from '../hooks/useFetchGenres';
// Stores
import { useGameQueryStore } from '../stores/gameQueryStore';
// Types
import { Genre } from '../types/genre';

const genreItemSkeletons = [1, 2, 3, 4, 5, 6];

export function GenresList(): JSX.Element | null {
  const { selectedGenreId, setSelectedGenreId } = useGameQueryStore(
    (store) => ({
      selectedGenreId: store.gameQuery.genreId,
      setSelectedGenreId: store.setGenreId,
    }),
  );
  const { data, error, isLoading } = useFetchGenres();

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>

      <List>
        {isLoading &&
          genreItemSkeletons.map((genreItemSkeleton: number): JSX.Element => {
            return (
              <ListItem key={genreItemSkeleton}>
                <GenreItemContainer>
                  <GenreItemSkeleton />
                </GenreItemContainer>
              </ListItem>
            );
          })}

        {data?.results.map((genre: Genre): JSX.Element => {
          return (
            <ListItem key={genre.id}>
              <GenreItemContainer>
                <GenreItem
                  genre={genre}
                  selectedGenreId={selectedGenreId as number}
                  setSelectedGenreId={setSelectedGenreId}
                />
              </GenreItemContainer>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
