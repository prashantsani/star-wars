'use client';

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  search?: string;
}
/**
 * PaginationControls component to handle pagination in the character list.
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @param {string} [search] - Optional search query string.
 * 
 * Use of <a> instad of Next's <Link> ensures page refresh, requesting a Server Rendered Page
 */
export function PaginationControls({ currentPage, totalPages, search }: PaginationControlsProps) {
  const createLink = (page: number) => {
    const query = new URLSearchParams();
    if (page > 1) query.set('page', String(page));
    if (search) query.set('search', search);
    return `/characters?${query.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious>
              <a href={createLink(currentPage - 1)}>Previous</a>
            </PaginationPrevious>
          </PaginationItem>
        )}

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink isActive={page === currentPage}>
                <a href={createLink(page)}>{page}</a>
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext>
              <a href={createLink(currentPage + 1)}>Next</a>
            </PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
