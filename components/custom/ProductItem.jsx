"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { useShopContext } from "@/app/context/ShopContext";
import React from "react";

// Custom Rating Component
const RatingComponent = ({ value, max = 5 }) => {
  const stars = Array.from({ length: max }, (v, i) => i + 1);

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          fill={star <= value ? "gold" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="w-5 h-5 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.11 6.518a1 1 0 00.95.69h6.84c.97 0 1.371 1.24.588 1.81l-5.53 4.02a1 1 0 00-.364 1.118l2.11 6.517c.3.92-.755 1.688-1.54 1.118l-5.53-4.02a1 1 0 00-1.176 0l-5.53 4.02c-.785.57-1.838-.197-1.539-1.118l2.11-6.517a1 1 0 00-.364-1.118l-5.53-4.02c-.783-.57-.383-1.81.588-1.81h6.84a1 1 0 00.95-.69l2.11-6.518z"
          />
        </svg>
      ))}
    </div>
  );
};

const ProductItem = ({ product }) => {
  const { currency, wishList, toggleWishList } = useShopContext();

  return (
    <div>
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg ">
        <div className=" mx-3 mt-3 h-60 overflow-hidden rounded-xl relative">
          <Image
            src={product.images[0]}
            layout="responsive"
            alt="product img"
            width={450}
            height={300}
            className="rounded-lg transition duration-500 hover:scale-125"
          />
          {/* Wishlist Button */}
          <button
            className="text-xl ml-4 absolute top-3 right-3 bg-white p-3 rounded-full"
            onClick={() => toggleWishList(product?._id)}
          >
            {/* {wishList[product?._id] ? (
              <FaHeart className="text-red-500" />
            ) : (
                )} */}
            <FaRegHeart className="text-gray-500" />
          </button>
        </div>
        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight text-slate-900">
            {product.name}
          </h5>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                {currency}
                {product.discountPrice}
              </span>
            </p>
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-1 pb-2 absolute bottom-1">
            <RatingComponent value={product.rating} />
            <p>({product.ratingCount})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
