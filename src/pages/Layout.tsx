import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
// Components
import { NavBar } from '../components/NavBar';

export function Layout(): JSX.Element {
  return (
    <>
      <NavBar />

      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
}
