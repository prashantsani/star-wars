'use client';

import { useFavorites } from '@/context/FavoritesContext';

export function FavoriteDetailButton({ uid, name, className, gender, planetName }: { uid: string; name: string, planetName: string | undefined, gender: string | undefined, className?: string }) {

  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const fav = isFavorite(uid);

  return (
    <button
      onClick={() =>
        fav ? removeFavorite(uid) : addFavorite({ uid, name, gender, planetName })
      }
      className={`mt-4 px-4 py-2 rounded cursor-pointer self-center 
        ${className ? className: ''}  
        ${fav ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`}
    >
      {fav ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
}
