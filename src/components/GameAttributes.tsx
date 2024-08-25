import { Text, SimpleGrid } from '@chakra-ui/react';
// Components
import { Attribute } from './Attribute';
import { CriticScore } from '../components/CriticScore';
// Types
import { Game } from '../types/game';
import { ParentPlatform } from '../types/parent-platform';
import { Genre } from '../types/genre';
import { Publisher } from '../types/publisher';

type Props = {
    game: Game
};

export function GameAttributes({ game }: Props): JSX.Element {
    return (
        <SimpleGrid
                columns={2}
                as='dl'
            >
                <Attribute
                    term='Platforms'
                >
                    {game?.parent_platforms.map((parentPlatform: ParentPlatform): JSX.Element => {
                        return (
                            <Text
                                key={parentPlatform.platform.id}
                            >
                                {parentPlatform.platform.name}
                            </Text>
                        );
                    })}
                </Attribute>

                <Attribute
                    term='Critic Score'
                >
                    <CriticScore 
                        score={game?.metacritic as number}
                    />
                </Attribute>

                <Attribute
                    term='Genres'
                >
                    {game?.genres.map((genre: Genre): JSX.Element => {
                        return (
                            <Text
                                key={genre.id}
                            >
                                {genre.name}
                            </Text>
                        );
                    })}
                </Attribute>

                <Attribute
                    term='Publishers'
                >
                    {game?.publishers.map((publisher: Publisher): JSX.Element => {
                        return (
                            <Text
                                key={publisher.id}
                            >
                                {publisher.name}
                            </Text>
                        );
                    })}
                </Attribute>
            </SimpleGrid>
    );
}