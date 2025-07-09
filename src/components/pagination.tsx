import { Button } from "~/components/ui/button";
import { useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  useEffect(() => {
    const universitiesContainer = document.getElementById(
      "universities-container"
    );
    if (universitiesContainer) {
      universitiesContainer.scrollIntoView({
        block: "start",
      });
    } else {
      // Fallback to the original scroll behavior if element not found
      window.scrollTo({ top: 400 });
    }
  }, [currentPage]);

  if (totalPages <= 1) return null; // No pagination needed if only one page

  // Helper to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    const left = Math.max(2, currentPage - 2);
    const right = Math.min(totalPages - 1, currentPage + 2);
    pages.push(1);
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <>
      <div className="flex justify-center  items-center gap-2 mt-8">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </Button>
        {getPageNumbers().map((page, idx) =>
          page === "..." ? (
            <span key={"ellipsis-" + idx} className="px-2 text-lg select-none">
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => handlePageChange(Number(page))}
              className="w-10 h-10 p-0"
            >
              {page}
            </Button>
          )
        )}
        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Pagination;
