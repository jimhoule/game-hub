import { Link } from 'react-router-dom';
import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react';
// Components
import { PlatformIcons } from './PlatformIcons';
import { CriticScore } from './CriticScore';
import { Emoji } from './Emoji';
// Types
import { Game } from '../types/game';
import { ParentPlatform } from '../types/parent-platform';
import { Platform } from '../types/platform';
// Utils
import { getCroppedImageUrl } from '../utils/getCroppedImageUrl';

type Props = {
  game: Game;
};

export function GameCard({ game }: Props): JSX.Element {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcons
            platforms={game.parent_platforms.map(
              (parentPlatform: ParentPlatform): Platform => {
                return parentPlatform.platform;
              },
            )}
          />

          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>

          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}
