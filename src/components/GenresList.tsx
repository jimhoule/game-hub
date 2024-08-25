import { List, ListItem, HStack, Image, Button, Spinner, Heading } from '@chakra-ui/react';
// Hooks
import { useFetchGenres } from '../hooks/useFetchGenres';
// Stores
import { useGameQueryStore } from '../stores/gameQueryStore';
// Types
import { Genre } from '../types/genre';
// Utils
import { getCroppedImageUrl } from '../utils/getCroppedImageUrl';

export function GenresList(): JSX.Element | null {
    const { selectedGenreId, setSelectedGenreId } = useGameQueryStore((store) => ({
        selectedGenreId: store.gameQuery.genreId,
        setSelectedGenreId: store.setGenreId,
    }));
    const { data, error, isLoading } = useFetchGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading
                fontSize='2xl'
                marginBottom={5}
            >
                Genres
            </Heading>

            <List>
                {data?.results.map((genre: Genre): JSX.Element => {
                    return (
                        <ListItem
                            key={genre.id}
                            paddingY='5px'
                        >
                            <HStack>
                                <Image 
                                    boxSize='32px'
                                    borderRadius={8}
                                    objectFit='cover'
                                    src={getCroppedImageUrl(genre.image_background)}
                                />

                                <Button
                                    fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                                    fontSize='lg'
                                    variant='link'
                                    whiteSpace='normal'
                                    textAlign='left'
                                    onClick={(): void => {
                                        setSelectedGenreId(genre.id);
                                    }}
                                >
                                    {genre.name}
                                </Button>
                            </HStack>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
}