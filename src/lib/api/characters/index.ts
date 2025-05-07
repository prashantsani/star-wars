import { cache } from 'react';
import { BASE_URL } from '@/utils/constants';
import type {
  CharacterListResponse,
  CharacterDetailResponse
} from './types';

/**
 * Fetches a paginated list of characters, with an optional search string.
 * The result is cached using React Cache – only server components may call this.
 */
export const getCharacters = cache(async (page = 1, search?: string): Promise<CharacterListResponse> => {
  let url = `${BASE_URL}/people?page=${page}&limit=10`;
  
  if (search && search.trim()) {
    url = `${BASE_URL}/people/?name=${encodeURIComponent(search.trim())}`;
  }
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch characters: ${response.status}`);
  }
  
  return response.json();
});

/**
 * Fetches detailed information for a single character identified by `id`.
 * The result is cached and can only be called by server components.
 */
export const getCharacterDetail = cache(async (id: string): Promise<CharacterDetailResponse> => {
  const response = await fetch(`${BASE_URL}/people/${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch character ${id}: ${response.status}`);
  }
  
  return response.json();
});
