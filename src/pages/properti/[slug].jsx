import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import BottomNavbar from "@/component/BottomNavbar";
import ProfileCard from "@/component/ProfileCard";
import SpekLengkap from "@/component/SpekLengkap";

const DetailProduct = ({ products }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const hasStatus = products.status && products.status.length > 0;
  return (
    <>
      <BottomNavbar primary={"text-primary"} white={"text-primary"} />
      <div className="py-24 mobile:py-16 tablet:py-16">
        <div className="mx-auto containers">
          <div
            className={`desktop:px-10 w-full ${
              hasStatus ? "brightness-75" : ""
            }`}
          >
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {products.detail_image.map((imageUrl) => (
                <SwiperSlide
                  key={imageUrl.id}
                  className=" w-full pb-[45%] rounded relative overflow-hidden"
                >
                  <Link href={`/detail/${products.slug}`}>
                    <div className="absolute inset-0 w-full h-full " />
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src={imageUrl.detail_images}
                      alt={imageUrl.id}
                    />
                    {hasStatus && (
                      <div className="absolute inset-0 flex items-center justify-center text-white uppercase">
                        <p className="p-2 text-2xl font-bold text-white uppercase bg-black rounded ">
                          {products.status[0].nama_status}
                        </p>
                      </div>
                    )}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <br />
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {products.detail_image.map((imageUrl) => (
                <SwiperSlide
                  key={imageUrl.id}
                  className="w-full pb-[13%]  rounded relative overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full " />
                  <img
                    className="absolute inset-0 object-cover w-full h-full"
                    src={imageUrl.detail_images}
                    alt={imageUrl.id}
                  />
                  {hasStatus && (
                    <div className="absolute inset-0 flex items-center justify-center text-white uppercase">
                      <p className="p-2 text-2xl font-bold text-white uppercase bg-black rounded ">
                        {products.status[0].nama_status}
                      </p>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="px-2 desktop:px-10">
            <div className="text-base font-medium text-black/70">
              <div className="flex mt-10 mb-4 text-xs gap-x-4 Sdesktop:mt-0">
                <h4 className="px-2 py-2 font-medium text-white rounded bg-bg ">
                  <div key={products.type.id}>{products.type.name}</div>
                </h4>
                <h4 className="px-1 py-2 font-medium text-black bg-transparent rounded shadow">
                  {products.typeproperty.map((city) => (
                    <div key={city.id}>{city.name}</div>
                  ))}
                </h4>
              </div>
              <h1>
                {products.market.replace(/\[|\]|"/g, "").replace(/,/g, "/")}
              </h1>
              <p>{products.title}</p>
              <p>
                {hasStatus
                  ? // Display nothing when status is present
                    null
                  : // Display the price when there is no status
                    `Rp ${products.harga}`}
              </p>

              <h4>
                {products.kota.map((city) => (
                  <div key={city.id}>{city.name}</div>
                ))}
              </h4>

              <div className="flex justify-between">
                <SpekLengkap props={products} />
                <div className="mobile:hidden tablet:hidden">
                  <ProfileCard pesanwa={products.title} />
                </div>
              </div>
              <div className="mt-4 text-lg ">
                <h1 className="mb-2 font-semibold text-black/70">
                  Deskripsi :{" "}
                </h1>
              </div>
              <h2
                className="mb-5 text-sm font-medium text-black/50 desktop:w-[65%] "
                dangerouslySetInnerHTML={{ __html: products.deskripsi }}
              ></h2>
            </div>
          </div>
          <div className="px-2 pb-10 desktop:hidden">
            <ProfileCard pesanwa={products.title} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;

export async function getServerSideProps({ params }) {
  console.log(params);
  // fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${params.slug}`);
  const response = await res.json();
  return {
    props: {
      products: response.products,
    },
  };
}
