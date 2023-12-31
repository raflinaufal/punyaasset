import React from "react";

const SkeletonCard = () => {
  return (
    <div className="py-10">
      <div className="px-4 containers">
        <div className="flex flex-col gap-5 p-2 bg-white rounded-md shadow-lg select-none desktop:max-w-xs sm:p-4 sm:h-64 sm:flex-row">
          <div className="bg-gray-300 rounded-md h-52 sm:h-full sm:w-72 animate-pulse"></div>
          <div className="flex flex-col flex-1 gap-5 sm:p-2">
            <div className="flex flex-col flex-1 gap-3">
              <div className="w-full h-3 bg-gray-300 animate-pulse rounded-2xl"></div>
              <div className="w-full h-3 bg-gray-300 animate-pulse rounded-2xl"></div>
              <div className="w-full h-3 bg-gray-300 animate-pulse rounded-2xl"></div>
              <div className="w-full h-3 bg-gray-300 animate-pulse rounded-2xl"></div>
            </div>
            <div className="flex gap-3 mt-auto">
              <div className="w-20 h-8 bg-gray-300 rounded-md animate-pulse"></div>
              <div className="w-20 h-8 ml-auto bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
