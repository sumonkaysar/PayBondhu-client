import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePagination } from "@/hooks/use-pagination";
import type { ITransactionsQueryParams } from "@/types/transaction.type";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  paginationItemsToDisplay?: number;
  setQueryParams: React.Dispatch<
    React.SetStateAction<ITransactionsQueryParams>
  >;
};

export default function PaginationCard({
  currentPage,
  totalPages,
  paginationItemsToDisplay = 10,
  setQueryParams,
}: PaginationProps) {
  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
  });

  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      setQueryParams((prevQuery) => ({ ...prevQuery, page: currentPage - 1 }));
    }
  };

  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setQueryParams((prevQuery) => ({ ...prevQuery, page: currentPage + 1 }));
    }
  };

  const handleOnClickPage = (page: number) => {
    setQueryParams((prevQuery) => ({ ...prevQuery, page }));
  };

  const handleChangeItemsPerPage = (val: string) => {
    setQueryParams((prevQuery) => ({ ...prevQuery, limit: Number(val) }));
  };

  return (
    <div className="lg:flex items-center justify-between gap-3 py-4 lg:py-0">
      <p
        className="text-muted-foreground flex-1 text-sm whitespace-nowrap text-center lg:text-left"
        aria-live="polite"
      >
        Page <span className="text-foreground">{currentPage}</span> of{" "}
        <span className="text-foreground">{totalPages}</span>
      </p>
      <div className="grow my-4 lg:my-0">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                onClick={handlePreviousPage}
                aria-label="Go to previous page"
                aria-disabled={currentPage === 1 ? true : undefined}
                role={currentPage === 1 ? "link" : undefined}
              >
                <ChevronLeftIcon size={16} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
            {showLeftEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {pages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handleOnClickPage(page)}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            {showRightEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                onClick={handleNextPage}
                aria-label="Go to next page"
                aria-disabled={currentPage === totalPages ? true : undefined}
                role={currentPage === totalPages ? "link" : undefined}
              >
                <ChevronRightIcon size={16} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex flex-1 justify-center lg:justify-end">
        <Select
          defaultValue={paginationItemsToDisplay.toLocaleString()}
          aria-label="Results per page"
          onValueChange={handleChangeItemsPerPage}
        >
          <SelectTrigger
            id="results-per-page"
            className="w-fit whitespace-nowrap"
          >
            <SelectValue placeholder="Select number of results" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 / page</SelectItem>
            <SelectItem value="20">20 / page</SelectItem>
            <SelectItem value="50">50 / page</SelectItem>
            <SelectItem value="100">100 / page</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
