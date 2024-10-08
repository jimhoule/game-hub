import { Link } from 'react-router-dom';
import { HStack, Image } from '@chakra-ui/react';
// Assets
import logo from '../assets/logo.webp';
// Components
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';

export function NavBar(): JSX.Element {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>

      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
}
