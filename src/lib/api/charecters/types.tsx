export interface CharacterListItem {
  uid: string;
  name: string;
  url: string;
}

export interface CharacterListResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: CharacterListItem[];
}

export interface CharacterDetail {
  properties: {
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
  };
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface CharacterDetailResponse {
  message: string;
  result: CharacterDetail;
}
