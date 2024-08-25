import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
// Stores
import { useGameQueryStore } from '../stores/gameQueryStore';

export function SearchInput(): JSX.Element {
    const navigate = useNavigate();
    const setSearch = useGameQueryStore((store) => store.setSearch);
    const [searchText, setSearchText] = useState<string>('');

    return (
        <form
            onSubmit={(event: FormEvent<HTMLFormElement>): void => {
                event.preventDefault();

                if (!searchText) return;

                setSearch(searchText);
                navigate('/');
            }}
        >
            <InputGroup>
                <InputLeftElement 
                    children={<BsSearch />}
                />

                <Input 
                    borderRadius={20}
                    placeholder='Search games...'
                    variant='filled'
                    value={searchText}
                    onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                        setSearchText(event.currentTarget.value);
                    }}
                />
            </InputGroup>
        </form>
    );
}