import { CharactersPageProps } from "./types";
import { charecterDetailsLabels } from './constants';
import { getCharacterDetail } from '@/lib/api/characters';
import { CharacterDetailResponse } from '@/lib/api/characters/types';

export default async function CharactersDetailPage({ params }: CharacterPageProps) {
  const { id } =  await params;

  const data: CharacterDetailResponse = await getCharacterDetail(id);
  const character = data.result.properties;

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
