import Link from "next/link";
import { useEffect, useState } from "react";
import { BiBath, BiBed } from "react-icons/bi";
import SkeletonCard from "./SkeletonCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNavButtons } from "./SwiperNavButtons";

function Product() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
        const apiData = await response.json();

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        // Filter products based on type_id
        const filteredProducts = apiData.products.filter(
          (product) => product.type.id === 2 && product.user_id === "1"
        );

        setProducts(filteredProducts.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <SkeletonCard />
      </div>
    );
  }
  if (!products || products.length === 0) {
    return <></>;
  }

  return (
    <div className="pb-12">
      <div className="mx-auto containers">
        <div className="">
          <div className="flex items-center justify-between px-4 mb-4 ">
            <div className="mt-8 text-xl font-medium mobile:text-base">
              Rekomendasi Apartement
            </div>
            <div>{swiper && <SwiperNavButtons swiper={swiper} />}</div>
          </div>
          <div className="ListinganTerbaru">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView="auto"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1170: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              onSwiper={(swiper) => setSwiper(swiper)}
            >
              {products.map((product) => (
                <SwiperSlide className="res-slide" key={product.id}>
                  <Link href={`/properti/${encodeURIComponent(product.slug)}`}>
                    <div className="relative w-full px-4 mx-auto">
                      <div className="p-4 bg-white border rounded shadow-lg">
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
                          <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white rounded select-none bg-bg">
                            {product.market
                              .replace(/\[|\]|"/g, "")
                              .replace(/,/g, "/")}
                          </span>
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
                            {product.kota.map((type) => (
                              <div key={type.id}>{type.name}</div>
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
                        <div className="grid grid-cols-2 mt-5">
                          <div className="flex items-center">
                            <p className="font-medium text-black/80 line-clamp-1">
                              Rp {product.harga}
                            </p>
                          </div>
                          <div className="flex items-end justify-end">
                            <Link
                              href={`/properti/${encodeURIComponent(
                                product.slug
                              )}`}
                            >
                              <div className="font-medium text-bg hover:underline">
                                Detail
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
