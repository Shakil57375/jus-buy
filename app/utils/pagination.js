import React from "react";

const Pagination = ({ currentPage, totalPages, handlePageChange, handleNextPage, handlePrevPage }) => {
  return (
    <div className="mt-8 flex justify-center items-center gap-4">
      <button
        onClick={handlePrevPage}
        className={`px-3 py-1 border ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-1 border ${index + 1 === currentPage ? "bg-orange-500 text-white" : ""}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className={`px-3 py-1 border ${currentPage === totalPages ? "cursor-not-allowed" : ""}`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
