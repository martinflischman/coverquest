// Pagination.jsx
import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

/**
 * Pagination component used in CoverQuest to navigate between pages of book results.
 * Displays first, previous, next, and last page controls.
 */
function Pagination({ page, totalPages, onPageChange }) {
  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  return (
    <div className="flex justify-center items-center gap-3 mt-10">
      {/* First Page Button */}
      <button
        className="btn btn-sm bg-black text-white hover:opacity-90"
        onClick={() => onPageChange(1)}
        disabled={!canGoPrev}
        aria-label="First Page"
      >
        <FaAngleDoubleLeft />
      </button>

      {/* Previous Page Button */}
      <button
        className="btn btn-sm bg-black text-white hover:opacity-90"
        onClick={() => onPageChange(page - 1)}
        disabled={!canGoPrev}
      >
        Prev
      </button>

      {/* Current Page Display */}
      <span className="text-sm font-medium text-base-content/70">
        Page {page} of {totalPages}
      </span>

      {/* Next Page Button */}
      <button
        className="btn btn-sm bg-black text-white hover:opacity-90"
        onClick={() => onPageChange(page + 1)}
        disabled={!canGoNext}
      >
        Next
      </button>

      {/* Last Page Button */}
      <button
        className="btn btn-sm bg-black text-white hover:opacity-90"
        onClick={() => onPageChange(totalPages)}
        disabled={!canGoNext}
        aria-label="Last Page"
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}

export default Pagination;
