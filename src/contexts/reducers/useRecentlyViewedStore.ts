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


export const useRecentlyViewedStore = create(
  persist(
    (set: any, get: any) => ({
      recentlyViewed: [] as string[],
      updateRecentlyViewed: (recent: string) => {
        const newRecent = get().recentlyViewed
        newRecent.unshift(recent)
        set({ recentlyViewed: newRecent });
      },
      emptyRecentlyViewed: () => {
        set({ recentlyViewed: [] });
      },
    }),
 
    {
      name: 'recently-viewed-storage',
      storage: createJSONStorage(() => storage),
    },
  ),
);
