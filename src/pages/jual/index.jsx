import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { IoAlertCircleOutline } from "react-icons/io5";
import SkeletonCard from "@/component/SkeletonCard";
import CustomPagination from "@/component/CustomPagination";
import BottomNavbar from "@/component/BottomNavbar";
import FilterAll from "@/component/FilterAll";
import Modal from "@/component/Modal";
import TypeProperty from "@/component/TypeProperty";

const ITEMS_PER_PAGE = 6;
const ALERT_MESSAGE = "Mohon Maaf Property Belum Tersedia ";
const ALERT_INFORMASI = "Pesan Informasi";

const getStatusLabel = (product) => {
  if (product.status && product.status.length > 0) {
    return product.status[0].nama_status || "Unknown Status";
  }
  return "Unknown Status";
};

const isStatusAvailable = (product) => {
  return product.status && product.status.length > 0;
};

const ProductJualPage = ({ initialProducts }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, [initialProducts]);

  const handleFilterChange = (search) => {
    setFilteredSearch(search);
  };
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const router = useRouter();
  const { search } = router.query;

  const filteredProducts = initialProducts
    .filter((product) => {
      const searchHome = search ? search.toLowerCase() : "";

      // Include only products that match the specified market
      const isMarketMatch = product.market.includes("Di Jual");
      // Check if the product typeproperty name matches the selected type
      const isTypePropertyMatch =
        !selectedType || product.typeproperty[0].name === selectedType;
      return (
        isMarketMatch &&
        (product.type.name.toLowerCase().includes(searchHome) ||
          product.kota.some((k) =>
            k.name.toLowerCase().includes(searchHome)
          )) &&
        (!selectedCity || product.kota.some((k) => k.name === selectedCity)) &&
        (!selectedCity || product.kota.some((k) => k.name === selectedCity)) &&
        isTypePropertyMatch
      );
    })
    .filter((product) => product.user_id === "1");

  const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    offset,
    offset + ITEMS_PER_PAGE
  );

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pageCount - 1;
  const isDataAvailable = filteredProducts.length > 0;

  return (
    <section className="py-24">
      <div>
        <BottomNavbar primary={"text-primary"} white={"text-primary"} />
      </div>

      <div className="px-4 mx-auto containers">
        <div className="flex items-center pb-10 gap-x-1 ">
          <FilterAll
            onFilterChange={handleFilterChange}
            inputStyle="border"
            buttonStyle="bg-bg"
            placeholder="Cari Type atau Lokasi..."
          />
          <Modal />
        </div>
        <div className="relative -top-10">
          <TypeProperty
            onCityChange={handleCityChange}
            onTypeChange={handleTypeChange}
          />
        </div>
        <div className="">
          <div className="grid gap-5 tablet:grid-cols-2 desktop:grid-cols-3 ">
            {loading ? (
              <SkeletonCard />
            ) : paginatedProducts.length === 0 ? (
              <div className="px-4 py-3 bg-yellow-100 border border-yellow-500 rounded h-fit">
                <div className="flex items-center">
                  <IoAlertCircleOutline className="mr-1 text-yellow-700" />
                  <p className="text-sm font-semibold text-yellow-700 ">
                    {ALERT_INFORMASI}
                  </p>
                </div>
                <p className="mt-1 text-xs font-medium">{ALERT_MESSAGE}</p>
              </div>
            ) : (
              paginatedProducts.map((product) => (
                <div key={product.id}>
                  <Link href={`/properti/${product.slug}`}>
                    <div
                      className={`relative w-full mx-auto ${
                        isStatusAvailable(product) ? "brightness-90" : ""
                      }`}
                    >
                      {isStatusAvailable(product) && (
                        <div className="absolute z-30 py-16 text-center inset-10">
                          <p className="p-2 text-lg font-bold text-white uppercase bg-black rounded shadow-2xl">
                            {getStatusLabel(product)}
                          </p>
                        </div>
                      )}

                      <div className="p-4 bg-white border rounded shadow-lg ">
                        <div className="relative flex justify-center overflow-hidden rounded h-52">
                          <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                            <div className="absolute inset-0 bg-black">
                              <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-52"
                              />
                            </div>
                          </div>
                          {isStatusAvailable(product) ? null : (
                            <span
                              className={`absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white bg-bg rounded select-none`}
                            >
                              {product.market
                                .replace(/\[|\]|"/g, "")
                                .replace(/,/g, "/")}
                            </span>
                          )}
                        </div>
                        <div className="mt-4">
                          <div className="flex mb-4 text-sm">
                            <div className="px-2 text-white rounded bg-bg">
                              <div key={product.type.id}>
                                {product.type.name}
                              </div>
                            </div>
                          </div>
                          <h2 className="mt-2 text-sm font-medium text-black/80 line-clamp-1">
                            {product.title}
                          </h2>
                          <div className="mt-2 text-sm font-medium text-black/80 line-clamp-1">
                            {product.kota.map(({ id, name }) => (
                              <div key={id}>{name}</div>
                            ))}
                          </div>
                        </div>
                        <div className="flex mt-2 text-sm">
                          <div className="flex space-x-5 overflow-hidden">
                            <p className="flex items-center font-medium text-black/80">
                              <BiBed className="mr-1 text-sm" />{" "}
                              {product.kamar_tidur}
                            </p>
                            <p className="flex items-center font-medium text-black/80">
                              <BiBath className="mr-1 text-sm" />{" "}
                              {product.kamar_mandi}
                            </p>
                            <p className="flex items-center font-medium text-black/80">
                              LB : {product.luas_bangunan}
                            </p>
                            <p className="flex items-center font-medium text-black/80">
                              LT : {product.luas_keseluruhan}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between ">
                          {isStatusAvailable(product) ? (
                            <div className="flex justify-end"></div>
                          ) : (
                            <div className="flex justify-start mt-5">
                              <div className="">
                                <p className="font-medium text-black/80 line-clamp-1">
                                  Rp {product.harga}
                                </p>
                              </div>
                            </div>
                          )}
                          <div className="flex items-center justify-end mt-5">
                            <Link href={`/properti/${product.slug}`}>
                              <div className="font-medium text-bg hover:underline">
                                Detail
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex justify-center pt-20 mobile:pt-10 desktop:justify-end">
          <CustomPagination
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
            isDataAvailable={isDataAvailable}
          />
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
    const apiData = await response.json();

    return {
      props: {
        initialProducts: apiData.products,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        initialProducts: [],
      },
    };
  }
}

export default ProductJualPage;
