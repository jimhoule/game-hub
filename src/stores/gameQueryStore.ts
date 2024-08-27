import { create } from 'zustand';

type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  search?: string;
};

type GameQueryStore = {
  gameQuery: GameQuery;
  setSearch(search: string): void;
  setSortOrder(sortOrder: string): void;
  setGenreId(id: number): void;
  setPlatformId(id: number): void;
};

export const useGameQueryStore = create<GameQueryStore>((set) => {
  return {
    gameQuery: {},
    setSearch(search: string) {
      return set(() => {
        return {
          gameQuery: {
            search,
          },
        };
      });
    },
    setSortOrder(sortOrder: string) {
      return set((store) => {
        return {
          gameQuery: {
            ...store.gameQuery,
            sortOrder,
          },
        };
      });
    },
    setGenreId(genreId: number) {
      return set((store) => {
        return {
          gameQuery: {
            ...store.gameQuery,
            genreId,
          },
        };
      });
    },
    setPlatformId(platformId: number) {
      return set((store) => {
        return {
          gameQuery: {
            ...store.gameQuery,
            platformId,
          },
        };
      });
    },
  };
});
