/**
 * Represents a single list Item from People or Character List API
 * (part of response from Character/People API)
 */
export interface ResponseCharacterListItem {
  uid: string;
  name: string;
  url: string;
}

/**
 * Represents the response from People or Character (List) API
 */
export interface PeopleResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: ResponseCharacterListItem[];
}

/**
 * Represents the search parameters from URL
 * Used in pagination and search functionality.
 */
export interface CharactersListPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
}
