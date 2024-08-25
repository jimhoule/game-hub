import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
// Stores
import { useGameQueryStore } from '../stores/gameQueryStore';

type SortOrderObject = {
    value: string;
    label: string;
};

const sortOrderObjects: SortOrderObject[] = [
    {
        value: '',
        label: 'Relevance',
    },
    {
        value: '-added',
        label: 'Date added',
    },
    {
        value: 'name',
        label: 'Name',
    },
    {
        value: '-released',
        label: 'Release date',
    },
    {
        value: '-metacritic',
        label: 'Popularity',
    },
    {
        value: '-rating',
        label: 'Average rating',
    },
];

export function SortOrderSelector(): JSX.Element | null {
    const { selectedSortOrder, setSelectedSortOder } = useGameQueryStore((selector) => ({
        selectedSortOrder: selector.gameQuery.sortOrder,
        setSelectedSortOder: selector.setSortOrder,
    }));
    const selectedSortOrderObject = sortOrderObjects.find((sortOrderObject: SortOrderObject): boolean => {
        return sortOrderObject.value === selectedSortOrder;
    });

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
            >
                Order by: {selectedSortOrderObject?.label || sortOrderObjects[0].label}
            </MenuButton>

            <MenuList>
                {sortOrderObjects.map((sortOrderObject: SortOrderObject): JSX.Element => {
                    return (
                        <MenuItem
                            key={sortOrderObject.value}
                            value={sortOrderObject.value}
                            onClick={(): void => {
                                setSelectedSortOder(sortOrderObject.value);
                            }}
                        >
                            {sortOrderObject.label}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}