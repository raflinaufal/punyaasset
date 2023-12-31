// components/FilterAll.js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

const FilterAll = ({
  onFilterChange,
  containerStyle,
  inputStyle,
  buttonStyle,
  placeholder,
}) => {
  const router = useRouter();
  const [search, setSearch] = useState(router.query.search || "");
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      onFilterChange(search);
      setButtonClicked(false);
    }
  }, [search, onFilterChange, buttonClicked]);

  const handleFilter = () => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, search },
    });
    setButtonClicked(true);
  };

  return (
    <div className={` ${containerStyle}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BsSearch />
        </div>
        <input
          type="text"
          className={`block w-full p-4 pl-10 pr-20 desktop:pr-96 tablet:pr-96 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50  ${inputStyle}`}
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />

        <button
          onClick={handleFilter}
          className={`text-white absolute right-2 top-2 bg-bg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  ${buttonStyle}`}
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default FilterAll;
