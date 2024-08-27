import { Fragment } from 'react';
import { Text, SimpleGrid, Spinner } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
// Components
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContainer } from './GameCardContainer';
// Hooks
import { useFetchGames } from '../hooks/useFetchGames';
// Types
import { Game } from '../types/game';

const gameCardSkeletons = [1, 2, 3, 4, 5, 6];

export function GamesGrid(): JSX.Element {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useFetchGames();

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((accumulator: number, page): number => {
      return accumulator + page.results.length;
    }, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={(): void => {
        fetchNextPage();
      }}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
        padding={10}
      >
        {isLoading &&
          gameCardSkeletons.map((gameCardSkeleton: number): JSX.Element => {
            return (
              <GameCardContainer key={gameCardSkeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            );
          })}

        {data?.pages.map((page, index: number): JSX.Element => {
          return (
            <Fragment key={index}>
              {page.results.map((game: Game): JSX.Element => {
                return (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                );
              })}
            </Fragment>
          );
        })}
      </SimpleGrid>
    </InfiniteScroll>
  );
}
