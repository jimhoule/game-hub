import { SimpleGrid, Image } from '@chakra-ui/react';
// Hooks
import { useFetchScreenshots } from '../hooks/useFetchScreenshots';
// Types
import { Screenshot } from '../types/screenshot';

type Props = {
    gameId: number
};

export function GameScreenshots({ gameId }: Props): JSX.Element | null {
    const { data, error, isLoading } = useFetchScreenshots(gameId);

    if (error) throw error;
    if (isLoading) return null;

    return (
        <SimpleGrid
            columns={{
                base: 1,
                md: 2,
            }}
            spacing={2}
        >
            {data?.results.map((screenshot: Screenshot): JSX.Element => {
                return (
                    <Image
                        key={screenshot.id}
                        src={screenshot.image}
                    />
                );
            })}
        </SimpleGrid>
    );
}