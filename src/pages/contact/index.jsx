import React from "react";
import { BsFillTelephoneFill, BsFillBuildingFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

import BottomNavbar from "@/component/BottomNavbar";

const Contact = () => {
  return (
    <>
      <BottomNavbar
        primary={"text-white"}
        bg={"desktop:bg-black/40 mobile:bg-transparent"}
        white={"text-white"}
      />
      <div className="grid justify-between bg-white desktop:pr-7 desktop:grid-cols-2 desktop:items-center">
        <div className="desktop:h-[664px] mobile:h-screen mobile:w-full">
          <img
            src="/hero.jpg"
            alt=""
            className="object-cover w-full h-full brightness-75"
          />
        </div>
        <div className="desktop:bg-white absolute bg-black/80 desktop:px-10 desktop:py-16 py-10 px-4 rounded-lg shadow-md desktop:right-[15rem] w-[20rem] tablet:w-[40rem] desktop:w-[40rem] right-0 top-[15rem] left-0 mx-auto">
          <div className="w-full desktop:ml-16">
            <h1 className="mb-4 text-3xl font-bold text-black/90 mobile:text-2xl mobile:text-white/95 tablet:text-white/95 md:text-2xl desktop:text-black/80">
              Hubungi Saya
            </h1>
            <h2 className="desktop:text-black/80 mobile:text-white/95 tablet:text-white/95 text-base desktop:w-[30rem] mb-7 font-medium mobile:text-sm md:text-base">
              Jika ada pertanyaan atau konsultasi seputar property silahkan
              Hubungi saya di bawah.
            </h2>
            <div className="flex items-center mb-4 desktop:text-black/80 gap-x-2 mobile:text-white/95 tablet:text-white/95 text-black/75">
              <div>
                <BsFillTelephoneFill className="text-lg" />
              </div>
              <h1 className="text-base font-semibold mobile:text-sm">
                +62 877-89070-757
              </h1>
            </div>
            <div className="flex items-center mb-4 desktop:text-black/80 gap-x-2 mobile:text-white/95 tablet:text-white/95 text-black/75">
              <div>
                <BsFillBuildingFill className="text-lg" />
              </div>
              <h1 className="text-base font-semibold mobile:text-sm">
                +62 822-3333-5227
              </h1>
            </div>
            <div className="flex items-center desktop:text-black/80 gap-x-2 mobile:text-white/95 text-black/75 tablet:text-white/95">
              <div>
                <AiFillMail className="text-lg" />
              </div>
              <h1 className="text-base font-semibold mobile:text-sm">
                erickfuturaproperty@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
