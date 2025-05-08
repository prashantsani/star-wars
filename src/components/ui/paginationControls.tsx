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
            <PaginationPrevious href={createLink(currentPage - 1)}>
              Previous
            </PaginationPrevious>
          </PaginationItem>
        )}

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink isActive={page === currentPage} href={createLink(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={createLink(currentPage + 1)}>
              Next
            </PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
