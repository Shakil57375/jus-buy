"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { useShopContext } from "@/app/context/ShopContext";
import React, { useState } from "react";
import Link from "next/link";
import RatingComponent from "../Ui/RatingComponent";

const ProductItem = ({ product }) => {
  const { currency, wishList, toggleWishList, addToCart } = useShopContext();
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product._id, 1);
  };

  return (
    <Link href={`/products/${product._id.toString()}`}>
      <div
        className="relative lg:m-10 md:6 m-0 flex w-full max-w-xs flex-col overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="lg:mx-3 mx-1 mt-3 h-60 overflow-hidden rounded-xl relative">
          <Image
            src={product.images[0]}
            layout="responsive"
            alt="product img"
            width={270}
            height={250}
            className="rounded-lg transition duration-500 hover:scale-125"
          />

          {/* Wishlist Button */}
          <button
            className="text-xl ml-4 absolute top-3 right-3 bg-white p-3 rounded-full"
            onClick={(e) => {
              e.preventDefault(); // Prevent link navigation
              toggleWishList(product?._id);
            }}
          >
            {wishList[product?._id] ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
          </button>

          {/* Add to Cart button (appears on hover) */}
          {isHovered && (
            <button
              className="absolute bottom-0 w-full py-3 text-white bg-[#FE6201] text-center font-semibold"
              onClick={handleAddToCart} // Prevent link navigation
            >
              Add To Cart
            </button>
          )}
        </div>

        <div className="mt-4 px-5 pb-5">
          <h5 className="text-base leading-6 tracking-tight text-black font-medium">
            {product.name}
          </h5>
          <div className="mt-2 mb-5 flex items-center justify-between py-2">
            <p>
              <span className="text-base font-medium text-[#FE6201]">
                {currency}
                {product.discountPrice}
              </span>
            </p>

            {/* Rating Section */}
            <div className="flex items-center gap-1">
              <RatingComponent value={product.rating} />
              <span className="text-xs leading-6 text-black">
                ({product.ratingCount})
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;