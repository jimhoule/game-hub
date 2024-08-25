import { useParams } from 'react-router-dom';
import { Heading, Spinner, SimpleGrid, GridItem } from '@chakra-ui/react';
// Components
import { ExpendableText } from '../components/ExpendableText';
import { GameAttributes } from '../components/GameAttributes';
import { GameTrailer } from '../components/GameTrailer';
import { GameScreenshots } from '../components/GameScreenshots';
// Hooks
import { useFetchGame } from '../hooks/useFetchGame';

export function GamePage(): JSX.Element | null {
    const { slug } = useParams();
    const { data: game, error, isLoading } = useFetchGame(slug as string);

    if (error) throw error;
    if (isLoading) return <Spinner />;
    if (!game) return null;

    return (
        <SimpleGrid
            columns={{
                base: 1,
                md: 2,
            }}
            spacing={5}
        >
            <GridItem>
                <Heading>
                    {game.name}
                </Heading>

                <ExpendableText>
                    {game.description_raw as string}
                </ExpendableText>

                <GameAttributes 
                    game={game}
                />
            </GridItem>

            <GridItem>
                <GameTrailer 
                    gameId={game.id}
                />

                <GameScreenshots 
                    gameId={game.id}
                />
            </GridItem>
        </SimpleGrid>
    );
}