import { charecterDetailsLabels } from './constants';
import { getCharacterDetail, getHomePlanet } from '@/lib/api/characters';
import { CharacterDetailResponse } from '@/lib/api/characters/types';

/*
* This is a server component that fetches character details from the API
* and displays them on the page.
*
* The component uses async/await to fetch data from the API and render it.
* It also uses TypeScript for type safety and better developer experience.
*
* @param {Object} params - The parameters passed to the component.
* @param {string} params.id - The ID of the character to fetch.
* @returns {JSX.Element} The rendered component.
*/
export default async function CharactersDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const data: CharacterDetailResponse = await getCharacterDetail(id);
  const character = data.result.properties;
  const homePlanet = await getHomePlanet(data.result.properties.homeworld);
  character["homeworld"] = homePlanet.result.properties.name;

  return (
    <>
      <h1 className="page-header">{character.name}</h1>
      <dl className="grid grid-cols-1 gap-y-2">
        {charecterDetailsLabels.map(([key, label]) => {
          const value = character[key];
          // Only display the field if it has a non-empty value.
          return value && (
            <div key={key} className="flex flex-col md:flex-row">
              <dt className="font-semibold w-32">{label}:</dt>
              <dd className="ml-2">{value}</dd>
            </div>
          );
        })}
      </dl>
    </>
  );
}
