import { HStack, Image, Button } from '@chakra-ui/react';
// Types
import { Genre } from '../types/genre';
// Utils
import { getCroppedImageUrl } from '../utils/getCroppedImageUrl';

type Props = {
  genre: Genre;
  selectedGenreId: number;
  setSelectedGenreId(genreId: number): void;
};

export function GenreItem({
  genre,
  selectedGenreId,
  setSelectedGenreId,
}: Props): JSX.Element {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        objectFit="cover"
        src={getCroppedImageUrl(genre.image_background)}
      />

      <Button
        fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
        fontSize="lg"
        variant="link"
        whiteSpace="normal"
        textAlign="left"
        onClick={(): void => {
          setSelectedGenreId(genre.id);
        }}
      >
        {genre.name}
      </Button>
    </HStack>
  );
}
