import { Grid, GridItem, Show, HStack, Box } from '@chakra-ui/react';
// Components
import { GamesHeading } from '../components/GamesHeading';
import { PlatformSelector } from '../components/PlatformSelector';
import { SortOrderSelector } from '../components/SortOrderSelector';
import { GamesGrid } from '../components/GamesGrid';
import { GenresList } from '../components/GenresList';

export function HomePage(): JSX.Element {
    return (
        <Grid
			templateAreas={{
				base: `"main"`,
				// NOTE: 1024px and wider
				lg: `"aside main"`,
			}}
			templateColumns={{
				// NOTE: 1fr takes all the available space
				base: '1fr',
				lg: '200px 1fr'
			}}
		>
			<Show above='lg'>
				<GridItem 
					area='aside'
					paddingX={5}
				>
					<GenresList/>
				</GridItem>
			</Show>

			<GridItem area='main'>
				<Box
					paddingLeft={10}
				>
					<GamesHeading />

					<HStack
						spacing={5}
						marginBottom={5}
					>
						<PlatformSelector />

						<SortOrderSelector />
					</HStack>
				</Box>

				<GamesGrid />
			</GridItem>
		</Grid>
    );
}