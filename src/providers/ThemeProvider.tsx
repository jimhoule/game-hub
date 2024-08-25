import { ReactNode } from 'react';
import { ThemeConfig, ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

type Props = {
    children: ReactNode
};

const config: ThemeConfig = {
    initialColorMode: 'dark',
};

const colors = {
    gray: {
        50: '#f9f9f9',
        100: '#ededed',
        200: '#d3d3d3',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111',
    },
};

const theme = extendTheme({ config, colors });

export function ThemeProvider({ children }: Props): JSX.Element {
    return (
        <ChakraProvider
            theme={theme}
        >  
            <ColorModeScript 
                initialColorMode={theme.config.initialColorMode}
            />

            {children}
        </ChakraProvider>
    );
}