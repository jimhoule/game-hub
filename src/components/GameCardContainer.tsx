import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export function GameCardContainer({ children }: Props): JSX.Element {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.15s ease-in',
      }}
    >
      {children}
    </Box>
  );
}
