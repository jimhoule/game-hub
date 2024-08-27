// Hooks
import { useFetchTrailers } from '../hooks/useFetchTrailers';

type Props = {
  gameId: number;
};

export function GameTrailer({ gameId }: Props): JSX.Element | null {
  const { data, error, isLoading } = useFetchTrailers(gameId);

  if (error) throw error;
  if (isLoading) return null;

  const first = data?.results[0];
  if (!first) return null;

  return <video src={first.data[480]} poster={first.preview} controls />;
}
