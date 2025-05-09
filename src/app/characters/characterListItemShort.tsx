'use client';

import Link from 'next/link';
import type { characterListItemShort } from '@/lib/api/characters/types';
import { FavoriteDetailButton } from './FavoriteDetailButton';

export function CharacterListItemShort({ uid, name, gender, planetName }: characterListItemShort) {

    return (
        <li key={uid} className="border p-4 mb-4 rounded shadow-sm">
            <div className='flex justify-between flex-col sm:flex-row'>
                <div>
                    <Link
                        href={`/characters/${uid}`}
                        className="text-yellow hover:underline"
                    >
                        {name}
                    </Link>
                    <div>
                        <span className="font-semibold">Gender:</span> {gender}
                    </div>
                    <div>
                        <span className="font-semibold">Home Planet:</span> {planetName}
                    </div>
                </div>
                <FavoriteDetailButton uid={uid} name={name} gender={gender} planetName={planetName} className='md:float-right self-baseline ' />
            </div>
        </li>
    );
}