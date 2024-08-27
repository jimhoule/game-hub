import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export function GenreItemContainer({ children }: Props): JSX.Element {
  return <Box paddingY="5px">{children}</Box>;
}
