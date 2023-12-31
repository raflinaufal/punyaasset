// import Link from "next/link";
import BottomNavbar from "@/component/BottomNavbar";
import CTA from "@/component/CTA";
import Filter from "@/component/Filter";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Product from "@/component/Product";
import ProductApt from "@/component/ProductApt";
import ProductRmh from "@/component/ProductRmh";
import PropertyList from "@/component/PropertyList";

export default function Home() {
  return (
    <>
      <BottomNavbar primary={"text-primary"} white={"text-primary"} />
      <Hero />
      <Filter />
      <div className="relative desktop:-top-24 -top-16">
        <PropertyList />
      </div>
      <Product />
      <ProductRmh />
      <ProductApt />
      <CTA />
      <Footer />
    </>
  );
}
