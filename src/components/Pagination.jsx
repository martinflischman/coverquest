// Pagination.jsx
import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

function Pagination({ page, totalPages, onPageChange }) {
  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  return (
    <div className="flex justify-center items-center gap-2 mt-10 mb-6">
      {/* Jump to First Page */}
      <button
        onClick={() => onPageChange(1)}
        disabled={!canGoPrev}
        className="btn btn-circle text-white bg-black hover:opacity-90 disabled:opacity-40"
        aria-label="First Page"
      >
        <FaAngleDoubleLeft />
      </button>

      {/* Previous Page */}
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={!canGoPrev}
        className="btn text-white bg-black hover:opacity-90 disabled:opacity-40"
      >
        Prev
      </button>

      {/* Page indicator */}
      <span className="text-sm font-medium text-base-content/70 px-2">
        Page {page} of {totalPages}
      </span>

      {/* Next Page */}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={!canGoNext}
        className="btn text-white bg-black hover:opacity-90 disabled:opacity-40"
      >
        Next
      </button>

      {/* Jump to Last Page */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={!canGoNext}
        className="btn btn-circle text-white bg-black hover:opacity-90 disabled:opacity-40"
        aria-label="Last Page"
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}

export default Pagination;
