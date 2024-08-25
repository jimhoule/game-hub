import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
// Hooks
import { useFetchPlatforms } from '../hooks/useFetchPlatforms';
import { useFetchPlatform } from '../hooks/useFetchPlatform';
// Stores
import { useGameQueryStore } from '../stores/gameQueryStore';
// Types
import { Platform } from '../types/platform';

export function PlatformSelector(): JSX.Element | null {
    const { selectedPlatformId, setSelectedPlatformId } = useGameQueryStore((store) => ({
        selectedPlatformId: store.gameQuery.platformId,
        setSelectedPlatformId: store.setPlatformId,
    }));
    const selectedPlatform = useFetchPlatform(selectedPlatformId as number);
    const { data, error } = useFetchPlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
            >
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>

            <MenuList>
                {data?.results.map((platform: Platform): JSX.Element => {
                    return (
                        <MenuItem
                            key={platform.id}
                            onClick={() => {
                                setSelectedPlatformId(platform.id);
                            }}
                        >
                            {platform.name}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}