"use client";
import React from "react";
import Title from "../custom/Title";
import { useShopContext } from "@/app/context/ShopContext";
import ProductItem from "../custom/ProductItem";

const NewArrival = () => {
  const { products } = useShopContext();
  return (
    <div>
      <div className="flex items-end justify-between mb-5">
        <Title title={"This Month"} subtitle={"New Arrival"} />
        <button className="px-8 py-4 bg-orange-500 rounded text-white">
          View all
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-items-center gap-4">
        {products.slice(1,5).map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
