import { getCharacters } from '@/lib/api/characters';
import { PeopleResponse, CharactersListPageProps } from './types';
import Link from 'next/link';
import { getPageNumber } from '@/utils/helper';

export default async function CharactersList({ searchParams }: CharactersListPageProps) {

  const params = await searchParams;
  const pageStr = params.page ?? '1';
  const searchStr = params.search ?? '';

  const pageNumber = getPageNumber(pageStr);

  const data: PeopleResponse = await getCharacters(pageNumber, searchStr);

  return (
    <>
      <h1 className='page-header'>Characters</h1>
      <ul>
        {data.results.map((character) => (
          <li key={character.uid} className="border p-4 mb-4 rounded shadow-sm">
            <Link
              href={`/characters/${character.uid}`}
              className="text-yellow hover:underline"
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}