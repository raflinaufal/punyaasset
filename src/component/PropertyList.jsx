// PropertyList.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PropertyListSewa from "./PropertyListSewa";

const PropertyList = ({ onClose }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("dijual");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/type`);
        const apiData = await response.json();
        setProducts(apiData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleItemClick = () => {
    onClose();
  };

  const dijualTabContent = (
    <div className="flex flex-wrap justify-center gap-5 desktop:px-4 ">
      {products &&
        products.type.map((propertyType) => (
          <div
            className="px-2 py-3 border border-gray-300 rounded-lg shadow-md desktop:flex-1 mobile:p-3 mobile:h-fit tablet:h-fit"
            style={{ width: "calc(30% - 0.5rem)", maxWidth: "300px" }}
            key={propertyType.id}
            onClick={handleItemClick}
          >
            <Link href={`/jual/${propertyType.slug}`}>
              <img
                className="mx-auto"
                src={propertyType.url_icon}
                width={30}
                height={30}
                alt={propertyType.name}
              />
              <p className="font-medium text-center whitespace-normal mobile:text-xs mobile:truncate tablet:truncate desktop:truncate">
                {propertyType.name}
              </p>
            </Link>
          </div>
        ))}
    </div>
  );

  return (
    <div className="mx-auto containers">
      <div className="flex px-2 pb-4 space-x-2 desktop:justify-start desktop:px-4 tablet:px-7 ">
        <button
          className={`px-4 py-2 mobile:px-2 mobile:py-1 mobile:text-xs rounded-lg ${
            selectedTab === "dijual" ? "bg-bg text-white " : "border shadow-md"
          }`}
          onClick={() => setSelectedTab("dijual")}
        >
          Dijual
        </button>
        <button
          className={`px-4 py-2 mobile:px-2 mobile:py-1 mobile:text-xs rounded-lg ${
            selectedTab === "disewa" ? "bg-bg text-white " : "border shadow-md"
          }`}
          onClick={() => setSelectedTab("disewa")}
        >
          Disewa
        </button>
      </div>

      {loading && (
        <div>
          <div>
            <div className="px-4 containers">
              <div className="flex flex-col  bg-white rounded-md shadow-lg select-none max-h-20 max-w-[150px] sm:p-4 sm:h-64 sm:flex-row">
                <div className="bg-gray-300 rounded-md h-52 sm:h-full sm:w-72 animate-pulse"></div>
                <div className="flex flex-col flex-1 gap-5 sm:p-2"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && products && products.length === 0 && (
        <p>Data tidak ditemukan.</p>
      )}

      {!loading && selectedTab === "dijual" && dijualTabContent}

      {!loading && selectedTab === "disewa" && (
        <PropertyListSewa onClose={onClose} />
      )}
    </div>
  );
};

export default PropertyList;
