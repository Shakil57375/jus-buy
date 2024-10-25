import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Import filled heart icon
import { IoCartOutline } from "react-icons/io5";
import RatingComponent from "./RatingComponent";
import { useShopContext } from "@/app/context/ShopContext";

const ProductInfo = ({
  product,
  currency,
  setSize,
  setQuantity,
  Size,
  quantity,
}) => {
  const { addToCart, wishList, toggleWishList } = useShopContext(); // Destructure toggleWishList and wishList

  return (
    <div className="flex-1 p-6 bg-white rounded-lg">
      {/* Product Title and Brand */}
      <h1 className="font-medium text-2xl mt-2">{product.name}</h1>
      <p className="text-orange-600 font-semibold text-lg">
        {product.sellerName}
      </p>

      {/* Ratings, Reviews and Availability */}
      <div className="flex items-center mt-2 space-x-2">
        {/* Rating Section */}
        <div className="flex items-center gap-1 pb-2 ">
          <RatingComponent value={product.rating} />
          <p>({product.ratingCount})</p>
        </div>
        <div>
          |{" "}
          {product.inStock ? (
            <span className="text-green-500 font-medium"> in stock</span>
          ) : (
            <span className="text-red-500 font-medium">out of stock</span>
          )}
        </div>
      </div>

      {/* Product Price */}
      <p className="mt-4 text-3xl font-semibold text-gray-800">
        {currency} {product.price}
      </p>

      {/* Product Description */}
      <p className="mt-3 text-gray-500 text-sm">{product.description}</p>
      <p className="text-gray-500 text-sm mt-1">Brand: {product.brand}</p>

      {/* Size Selector */}
      <div className="flex flex-col gap-4 my-6">
        <p className="text-gray-800 font-medium">Size:</p>
        <div className="flex gap-2">
          {product.sizes.map((productSize) => (
            <button
              onClick={() => setSize(productSize)}
              className={`btn ${
                productSize === Size ? "bg-orange-500 text-white" : "border"
              } rounded-lg px-4 py-2`}
              key={productSize}
            >
              {productSize}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Action Buttons */}
      <div className="flex items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center">
          <button
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))} // Prevent negative quantity
            className="btn border border-gray-500 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-tl-lg rounded-bl-lg text-black text-lg"
          >
            -
          </button>
          <p className="text-lg border border-gray-500 font-semibold px-4 py-2">
            {quantity}
          </p>{" "}
          {/* Example quantity */}
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="btn border border-gray-500 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-tr-lg rounded-br-lg text-black text-lg"
          >
            +
          </button>
        </div>

        {/* Buy Now and Add to Cart */}
        <div className="flex gap-1 ">
          <button className="btn bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
            Buy Now
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => toggleWishList(product._id)} // Toggle wishlist on click
            className="btn border border-gray-500 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-lg ml-3"
          >
            {wishList[product._id] ? (
              <FaHeart className="text-red-500" /> // Filled heart if in wishlist
            ) : (
              <FaRegHeart className="text-gray-500" /> // Empty heart if not in wishlist
            )}
          </button>

          {/* Add to Cart Button */}
          <button 
            onClick={() => addToCart(product._id, quantity)} 
            className="btn border border-gray-500 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-lg"
          >
            <IoCartOutline className="hover:text-gray-500 cursor-pointer text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;