'use client';

import { createContext, useContext, ReactNode, useCallback } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CharacterSummary, FavoritesContextType } from './types'

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useLocalStorage<CharacterSummary[]>('favorites', []);

  const addFavorite = useCallback((c: CharacterSummary) => {
    setFavorites((prev) => [...prev, c]);
  }, [setFavorites]);

  const removeFavorite = useCallback((uid: string) => {
    setFavorites((prev) => prev.filter((c) => c.uid !== uid));
  }, [setFavorites]);

  const isFavorite = useCallback(
    (uid: string) => favorites.some((c) => c.uid === uid),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be inside FavoritesProvider');
  return ctx;
}
