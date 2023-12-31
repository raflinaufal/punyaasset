import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { MdSell } from "react-icons/md";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { useRouter } from "next/router";

const BottomNavbar = ({ primary, white, hidden, bg }) => {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-[99] ${hidden} ${
        colorChange ? `bg-white shadow-md ${primary}` : `${white} ${bg}`
      }`}
    >
      <nav className="flex justify-between w-full px-4 py-4 containers">
        <Link href="/">
          <img
            src="https://api-webhome.punyaasset.com/img/logo-futura.png"
            alt="logo futura"
            className="w-28"
          />
        </Link>
        <div className="flex desktop:items-center desktop:w-auto">
          <div className="hidden desktop:flex desktop:gap-x-7">
            <Link
              href="/"
              className="block text-lg font-medium mobile:text-white hover:text-primary/75"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="block text-lg font-medium mobile:text-white hover:text-primary/75"
            >
              Profile
            </Link>
            <Link
              href="/jual"
              className="block text-lg font-medium mobile:text-white hover:text-primary/75"
            >
              Dijual
            </Link>
            <Link
              href="/sewa"
              className="block text-lg font-medium mobile:text-white hover:text-primary/75"
            >
              Disewa
            </Link>

            <Link
              href="/contact"
              className="block text-lg font-medium mobile:text-white hover:text-primary/75"
            >
              Contact
            </Link>
            <Link
              href="/titip-jual-sewa"
              className="block text-lg font-medium mobile:text-white hover:text-primary/75"
            >
              Titip Jual/Sewa
            </Link>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-0 w-full bottomNav">
        <nav className="bottom-0 w-full px-4 text-xs bg-bg desktop:hidden">
          <ul className="flex items-center justify-between p-3 text-base font-bold text-center">
            <li
              className={`${isActive("/") ? "text-primary" : "text-white/70"}`}
            >
              <Link href="/">
                <FaHome className="mx-auto text-xl" />
                <span className="text-xs ">Home</span>
              </Link>
            </li>

            <li
              className={`${
                isActive("/sewa") ? "text-primary" : "text-white/70"
              }`}
            >
              <Link href="/sewa">
                <span>
                  <FaShoppingBag className="mx-auto text-xl " />
                  <span className="text-xs">Sewa</span>
                </span>
              </Link>
            </li>

            <li
              className={` ${
                isActive("/jual") ? "text-primary" : "text-white/70"
              }`}
            >
              <Link href="/jual">
                <span>
                  <FaShoppingBag className="mx-auto text-xl " />
                  <span className="text-xs">Jual</span>
                </span>
              </Link>
            </li>
            <li
              className={` ${
                isActive("/titip-jual-sewa") ? "text-primary" : "text-white/70"
              }`}
            >
              <Link href="/titip-jual-sewa">
                <span className="">
                  <MdSell className="mx-auto text-xl" />
                  <span className="overflow-hidden text-xs ">TitipJual</span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BottomNavbar;
