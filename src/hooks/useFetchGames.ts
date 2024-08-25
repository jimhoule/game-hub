import { useInfiniteQuery, QueryFunctionContext } from '@tanstack/react-query';
// Apis
import { FetchResponse } from '../apis/apiClient';
import { fetchGames } from '../apis/gamesApi';
// Stores
import { useGameQueryStore } from '../stores/gameQueryStore';
// Types
import { Game } from '../types/game';


export function useFetchGames() {
    const gameQuery = useGameQueryStore((store) => store.gameQuery);

    return useInfiniteQuery({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }: QueryFunctionContext): Promise<FetchResponse<Game>> => {
            return  fetchGames({
                params: {
                    genres: gameQuery.genreId,
                    platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.search,
                    page: pageParam,
                }
            });
        },
        // 24h
        staleTime: 24 * 60 * 60 * 1000,
        initialPageParam: undefined,
        getNextPageParam: (lastPage: FetchResponse<Game>, allPages: FetchResponse<Game>[]): number | undefined => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
    });
}