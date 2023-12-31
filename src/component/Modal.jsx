import React, { useState } from "react";
import PropertyList from "./PropertyList";
import { FaFilter } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      {!showModal && (
        <button
          className="px-2 py-2 text-white rounded-lg bg-bg "
          type="button"
          onClick={() => setShowModal(true)}
        >
          <div className="flex items-center justify-center text-sm ">
            <FaFilter className="mr-1" /> Filter
          </div>
        </button>
      )}

      {showModal && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900/20">
          <div className="m-2 bg-gray-100 rounded-xl ">
            <div className="flex flex-col rounded-lg bg-white  mobile:w-full px-4 mobile:overflow-y-auto max-h-[90vh]  tablet:w-[25rem] w-[1024px]">
              <div className="flex self-start justify-between w-full px-2 py-4 desktop:px-4 ">
                <h2 className="text-lg font-medium text-gray-700">Filter</h2>
                <button type="button" onClick={() => setShowModal(false)}>
                  <IoIosClose className="text-2xl" />
                </button>
              </div>
              <hr />

              <div className="pt-4 pb-8 ">
                <div className="px-2 pb-3 font-medium desktop:px-4 ">
                  Tipe Iklan
                </div>
                <PropertyList onClose={closeModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
