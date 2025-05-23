import { cache } from 'react';
import { BASE_URL } from '@/utils/constants';
import type {
  CharacterListResponse,
  CharacterDetailResponse
} from './types';

/**
 * Fetches a paginated list of characters, with an optional search string.
 * The result is cached using React Cache and Next.js fetch cache.
 * Data will be revalidated every 7 days.
 */
export const getCharacters = cache(async (page = 1, search?: string): Promise<CharacterListResponse> => {
  let url = `${BASE_URL}/people?page=${page}&limit=10`;
  
  if (search && search.trim()) {
    url = `${BASE_URL}/people/?name=${encodeURIComponent(search.trim())}`;
  }
  
  const response = await fetch(url, {
    next: { 
      revalidate: 604800 // Revalidate every week (7 days)
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch characters: ${response.status}`);
  }
  return response.json();
});

/**
 * Fetches detailed information for a single character identified by `id`.
 * The result is cached using React Cache and Next.js fetch cache.
 * Data will be revalidated every 7 days.
 */
export const getCharacterDetail = cache(async (id: string): Promise<CharacterDetailResponse> => {
  const response = await fetch(`${BASE_URL}/people/${id}`, {
    next: {
      revalidate: 604800 // Revalidate every week (7 days)
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch character ${id}: ${response.status}`);
  }
  
  return response.json();
});

/**
 * Fetches home planet details for a character.
 * The result is cached using React Cache and Next.js fetch cache.
 * Data will be revalidated every 7 days.
 */
export const getHomePlanet = cache(async (url: string): Promise<CharacterDetailResponse> => {
  const response = await fetch(url, {
    next: {
      revalidate: 604800 // Revalidate every week (7 days)
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch planet ${url}: ${response.status}`);
  }
  
  return response.json();
});
