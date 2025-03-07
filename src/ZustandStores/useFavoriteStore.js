import { create } from "zustand";
import { persist } from "zustand/middleware";
const useFavoriteStore = create(
 persist(
 (set) => ({
    favoriteEvents: [],

    deleteFavoriteObject: (id) =>
    set((state) => ({
        favoriteEvents: state.favoriteEvents.filter((item) => item.id !== id),
    })),
   
    addFavoriteObject: (event) =>
    set((state) => ({
        favoriteEvents: [...state.favoriteEvents, event],
    })),

    isFavorite: (id) => ()=>
       get().favoriteEvents.some((event)=>event.id == id)
    }),
    {
    name: "favorite-storage",
    getStorage: () => localStorage,
    }
    )
);
export default useFavoriteStore;