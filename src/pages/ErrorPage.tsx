import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Heading, Text, Box } from '@chakra-ui/react';
// Components
import { NavBar } from '../components/NavBar';

export function ErrorPage(): JSX.Element {
    const error = useRouteError();

    return (
        <>
            <NavBar />

            <Box
                padding={5}
            >
                <Heading>Oops</Heading>

                <Text>
                    {isRouteErrorResponse(error) ? 'This page does not exist' : 'An unexpected error occurred'}
                </Text>
            </Box>
        </>
    );
}