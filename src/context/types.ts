export interface CharacterSummary {
  uid: string;
  name: string;
  url?: string;
  gender: string;
  planetName: string;
}

export interface FavoritesContextType {
  favorites: CharacterSummary[];
  isFavorite: (uid: string) => boolean;
  addFavorite: (c: CharacterSummary) => void;
  removeFavorite: (uid: string) => void;
}