// SwiperNavButtons.jsx

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const SwiperNavButtons = ({ swiper }) => {
  if (!swiper) {
    return null;
  }

  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(false);

  const handlePrevClick = () => {
    swiper.slidePrev();
    setNextDisabled(false);
    if (swiper.isBeginning) {
      setPrevDisabled(true);
    }
  };

  const handleNextClick = () => {
    swiper.slideNext();
    setPrevDisabled(false);
    if (swiper.isEnd) {
      setNextDisabled(true);
    }
  };

  return (
    <div className="pt-8 space-x-2 desktop:pt-5 ">
      <button
        className={`px-2 py-1 border rounded-md shadow-md bg-bg ${
          isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrevClick}
        disabled={isPrevDisabled}
      >
        <FaArrowLeft className="text-sm text-white" />
      </button>
      <button
        className={`px-2 py-1 border rounded-md shadow-md bg-bg ${
          isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNextClick}
        disabled={isNextDisabled}
      >
        <FaArrowRight className="text-sm text-white" />
      </button>
    </div>
  );
};
