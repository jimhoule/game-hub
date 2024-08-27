import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

export function ColorModeSwitch(): JSX.Element {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />

      <Text whiteSpace="nowrap">Color Mode</Text>
    </HStack>
  );
}
