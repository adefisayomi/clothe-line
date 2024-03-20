import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import { get, set, del } from 'idb-keyval';

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};

// Define types for sorting
export const QUERY_LIST = {
  recommended: "| order(_random)",
  newest: '| order(_createdAt desc)',
  oldest: '| order(_createdAt asc)',
  'highest price': '| order(price desc)',
  'lowest price': '| order(price asc)',
};
export type SortProps = "recommended" | "newest" | "oldest" | "highest price" | "lowest price";

export const useSortQueryStore = create(
  persist(
    (set: any) => ({
      sortQuery: { type: "recommended", query: "" },
      handleSortQuery: async (sortType: SortProps) => {
        set({ sortQuery: { type: sortType, query: QUERY_LIST[sortType] } });
      },
    }),
 
    {
      name: 'sortQuery-storage',
      storage: createJSONStorage(() => storage),
    },
  ),
);
