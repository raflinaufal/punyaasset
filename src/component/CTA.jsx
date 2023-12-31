import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <div className="px-4 desktop:py-16 ">
      <div className="overflow-hidden border rounded-lg shadow-lg containers">
        <div className="flex flex-col overflow-hidden bg-white desktop:flex-row ">
          <div className="flex flex-col w-full p-4 desktop:w-1/2 desktop:p-8 ">
            <h2 className="text-xl font-bold text-primary tablet:text-2xl desktop:text-3xl">
              Titip Jual/Sewa
            </h2>
            <p className="mt-4 mb-8 text-gray-500  desktop:text-lg">
              Maksimalkan potensi properti Anda! Dengan menawarkan properti Anda
              untuk dijual atau disewakan, Anda dapat mencapai tujuan finansial
              Anda. Jangan lewatkan kesempatan ini untuk menjual atau menyewakan
              dengan bantuan kami.
            </p>
            <Link
              href={"/titip-jual-sewa"}
              className="flex items-center justify-center px-6 py-2 mt-auto text-white transition rounded-md cursor-pointer select-none group w-44 bg-bg"
            >
              <span className="flex items-center justify-center w-full py-1 font-bold text-center rounded group">
                Selengkapnya
              </span>
            </Link>
          </div>
          <div className="order-first w-full h-48 ml-auto bg-gray-700 desktop:order-none desktop:h-auto desktop:w-1/2 lg:w-2/5">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
