import React, { useEffect, useState } from "react";
import { MdWork, MdLocationOn } from "react-icons/md";
import Footer from "@/component/Footer";
import BottomNavbar from "@/component/BottomNavbar";

const Profile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/profile/punyaasset`
        );

        if (response.ok) {
          const result = await response.json();

          // Assuming the data structure is an array of arrays
          setData(result[0]);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BottomNavbar
        primary={"text-black"}
        bg={"text-white"}
        white={"text-primary"}
      />
      <div>
        <div className="min-h-screen">
          <img
            src="/profileImg.jpg"
            alt=""
            className="w-full h-[400px] object-top object-cover brightness-50"
          />
          {data.map((item) => (
            <div key={item.id} className="">
              <div className="bg-white shadow-lg absolute mx-auto px-4 pt-16 pb-10 rounded-md flex flex-col items-center left-0 right-0 top-60 w-full max-w-screen-lg mobile:px-2 desktop:w-[40rem]">
                <div className="absolute w-24 h-24 overflow-hidden bg-gray-100 rounded-full -top-11 dark:bg-gray-600">
                  <img src={item.photo} alt={item.nama} className="w-full" />
                </div>
                <h1 className="mt-4 mb-2 text-3xl font-semibold text-black/80">
                  {item.nama}
                </h1>
                <h2 className="flex items-center mb-4 text-sm font-medium text-black/60 gap-x-2">
                  <MdLocationOn />
                  {item.lokasi}
                </h2>
                <h3 className="flex items-center mb-10 text-sm font-semibold text-black/60 mobile:font-medium gap-x-2">
                  <MdWork className="text-lg mobile:text-base" />
                  {item.office}
                </h3>
                <a
                  href={`https://wa.me/+6287789070757?text=Selamat siang. Saya ingin bertanya`}
                  className="px-16 py-3 text-sm font-medium text-center text-white rounded-md bg-primary"
                >
                  Contact
                </a>
                <hr className="bg-black/10 h-[.01rem] mt-10 w-full" />
                <div className="px-4 mt-10 mobile:px-2">
                  <p className="text-center text-black/80">{item.deskripsi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
