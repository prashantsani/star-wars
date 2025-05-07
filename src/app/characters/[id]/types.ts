/**
 * Represents the search parameters from the URL.
 * This type is useful for pagination and search queries.
 */
export interface CharactersPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
}
