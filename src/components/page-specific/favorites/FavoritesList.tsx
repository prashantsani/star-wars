'use client';

import { useFavorites } from '@/context/FavoritesContext';
import { CharacterListItemShort } from '../../../app/characters/characterListItemShort';

export default function FavoritesList() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <>
        <h1 className='page-header'>Favorites</h1>
        <p className="text-center py-8">You haven’t added any characters as favorites yet.</p>;
      </>
    )
  }

  return (
    <>
      <h1 className='page-header'>Favorites</h1>
      <ul>
        {favorites.map(({ uid, name, gender, planetName }) => (
          <CharacterListItemShort 
            key={uid}
            uid={uid}
            name={name} 
            gender={gender}
            planetName={planetName}
          />
      ))}
      </ul>
    </>
  );
}
