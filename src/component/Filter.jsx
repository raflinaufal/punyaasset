// components/Filter.js
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Filter = () => {
  const router = useRouter();
  const [search, setSearch] = useState(router.query.search || "");
  const [selectedTab, setSelectedTab] = useState("jual"); // Default tab

  const handleFilter = () => {
    router.push({
      pathname: `/${selectedTab}`,
      query: { search },
    });
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="relative max-w-2xl p-2 mx-auto border rounded-lg tl desktop:-top-32 -top-20 bg-bg">
      <div className="mb-2 text-sm font-semibold text-center text-white desktop:text-lg ">
        Jual Beli Properti Mudah dan Efektif
      </div>
      <div className="flex justify-center pb-5 space-x-5">
        <button
          onClick={() => handleTabChange("jual")}
          className={`${
            selectedTab === "jual"
              ? " text-white border-b-2 "
              : " text-white/70"
          }  font-medium  text-sm desktop:text-base `}
        >
          Dijual
        </button>
        <button
          onClick={() => handleTabChange("sewa")}
          className={`${
            selectedTab === "sewa"
              ? " text-white border-b-2 "
              : " text-white/70"
          }  font-medium  text-sm desktop:text-base `}
        >
          Disewa
        </button>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BsSearch />
        </div>
        <input
          type="text"
          className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Cari Type atau Lokasi..."
          onChange={(e) => setSearch(e.target.value)}
          required
        />

        <button
          onClick={handleFilter}
          className="absolute px-4 py-2 text-sm font-medium text-white bg-bg rounded-lg right-2 bottom-1.5 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default Filter;
