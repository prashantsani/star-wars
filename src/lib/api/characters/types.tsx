// src/lib/api/characters/types.ts
/**
 * Represents a single character item in the characters list.
 */
export interface CharacterListItem {
  uid: string;
  name: string;
  url: string;
}

/**
 * Represents the response from the characters list API.
 */
export interface CharacterListResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: CharacterListItem[];
}

/**
 * Represents the detailed properties of a character.
 */
export interface CharacterProperties {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

/**
 * Represents the full result from the character detail API.
 */
export interface CharacterDetail {
  properties: CharacterProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

/**
 * Represents the response from the character detail API.
 */
export interface CharacterDetailResponse {
  message: string;
  result: CharacterDetail;
}
