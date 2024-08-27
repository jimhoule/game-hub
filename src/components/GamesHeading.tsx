import { Heading } from '@chakra-ui/react';
// Hooks
import { useFetchGenre } from '../hooks/useFetchGenre';
import { useFetchPlatform } from '../hooks/useFetchPlatform';
// Stores
import { useGameQueryStore } from '../stores/gameQueryStore';

export function GamesHeading(): JSX.Element {
  const { selectedGenreId, selectedPlatformId } = useGameQueryStore(
    (store) => ({
      selectedGenreId: store.gameQuery.genreId,
      selectedPlatformId: store.gameQuery.platformId,
    }),
  );
  const selectedGenre = useFetchGenre(selectedGenreId as number);
  const selectedPlatform = useFetchPlatform(selectedPlatformId as number);

  const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}
