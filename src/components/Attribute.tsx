import { ReactNode } from 'react';
import { Box, Heading } from '@chakra-ui/react';


type Props = {
    term: string;
    children: ReactNode | ReactNode[];
};

export function Attribute({ term, children }: Props): JSX.Element {
    return (
        <Box
            marginY={5}
        >
            <Heading
                as='dt'
                fontSize='md'
                color='gray.600'
            >
                {term}
            </Heading>

            <dd>
                {children}
            </dd>
        </Box>
    );
}