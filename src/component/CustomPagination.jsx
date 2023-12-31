// components/CustomPagination.js
import React from "react";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";

const CustomPagination = ({
  pageCount,
  currentPage,
  handlePageChange,
  isFirstPage,
  isLastPage,
  isDataAvailable,
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`text-2xl font-bold ${
          isFirstPage || !isDataAvailable
            ? "text-gray-300 cursor-not-allowed"
            : "text-primary"
        }`}
        onClick={() => {
          if (!isFirstPage && isDataAvailable) {
            handlePageChange({ selected: currentPage - 1 });
          }
        }}
      >
        <RiArrowLeftDoubleFill />
      </div>
      {[...Array(pageCount)].map((_, index) => (
        <div
          key={index}
          className={`px-2 py-1 border text-primary hover:bg-bg/70 ${
            currentPage === index && "bg-bg text-white border"
          }`}
          onClick={() => {
            handlePageChange({ selected: index });
          }}
        >
          {index + 1}
        </div>
      ))}
      <div
        className={`text-2xl font-bold ${
          isLastPage || !isDataAvailable
            ? "text-gray-300 cursor-not-allowed"
            : "text-primary"
        }`}
        onClick={() => {
          if (!isLastPage && isDataAvailable) {
            handlePageChange({ selected: currentPage + 1 });
          }
        }}
      >
        <RiArrowRightDoubleFill />
      </div>
    </div>
  );
};

export default CustomPagination;
