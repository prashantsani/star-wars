import { getCharacters, getCharacterDetail, getHomePlanet } from '@/lib/api/characters';
import type { CharacterListResponse } from '@/lib/api/characters/types';
import type { CharactersListPageProps } from './types';
import type {characterListItemShort } from '@/lib/api/characters/types';
import { CharacterListItemShort } from './characterListItemShort';
import { getPageNumber } from '@/utils/helper';
import { PaginationControls } from '@/components/ui/paginationControls';

/**
 * This page lists characters from the Star Wars API.
 * @param {CharactersListPageProps} searchParams - The search parameters for pagination and filtering.
 * @returns {JSX.Element} The rendered component.
 */
export default async function CharactersList({ searchParams }: CharactersListPageProps) {

  const params = await searchParams;
  const pageStr = params.page ?? '1';
  const searchStr = params.search ?? '';

  const pageNumber = getPageNumber(pageStr);

  // Fetch the basic character list.
  // Note: The `getCharacters` function is cached and can only be called from server components.
  const data: CharacterListResponse = await getCharacters(pageNumber, searchStr);

  // For each character, fetch detailed info and the homeworld's name.
  const CharacterListItems: characterListItemShort[] = await Promise.all(
    data.results.map(async (character) => {
      // Get detailed character data (this includes gender and homeworld URL).
      // The `getCharacterDetail` function is also cached and can only be called from server components.
      const detailData = await getCharacterDetail(character.uid);
      const properties = detailData.result.properties;

      // Fetch homeworld details to retrieve the planet name.
      // The `getHomePlanet` function is not used in this example but is available for fetching home planet details.
      const homeworldData = await getHomePlanet(properties.homeworld);

      const planetName = homeworldData.result.properties.name;

      return {
        uid: detailData.result.uid,
        name: properties.name,
        url: character.url, // Add the missing 'url' property
        gender: properties.gender,
        planetName
      };
    })
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="page-header text-3xl font-bold mb-6">Characters</h1>
      <ul>
        {CharacterListItems.map((character) => (
          <CharacterListItemShort 
            key={character.uid}
            uid={character.uid}
            name={character.name} 
            gender={character.gender}
            planetName={character.planetName}
            url={character.url} 
          />
        ))}
      </ul>

      <PaginationControls
        currentPage={pageNumber}
        totalPages={data.total_pages}
        search={searchStr}
      />
    </div>
  );
}
