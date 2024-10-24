"use client";
import React from "react";
import Title from "../custom/Title";
import { useShopContext } from "@/app/context/ShopContext";
import ProductItem from "../custom/ProductItem";
import Link from "next/link";

const ExploreProducts = () => {
  const { products } = useShopContext();
    console.log(products)

  return (
    <div className="w-full mb-8">
      <Title title={"Our Products"} subtitle={"Explore Our Products"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4">
        {/* Display up to 8 latest products or all products if no filtering is needed */}
        {products.slice(0, 8).map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4"> {/* Centering the button */}
        <Link href={"/allProduct"} className="px-8 py-4 bg-orange-500 rounded text-white">
          View all
        </Link>
      </div>
    </div>
  );
};

export default ExploreProducts;