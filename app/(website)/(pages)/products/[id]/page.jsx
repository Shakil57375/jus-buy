"use client";
import { useShopContext } from "@/app/context/ShopContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
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
const ProductDetail = () => {
  const { id } = useParams(); // Get the 'id' from the dynamic route
  const { products, currency } = useShopContext();
  const [selectedImage, setSelectedImage] = useState(""); // Track selected image
  const [Size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);

  const p_id = parseFloat(id);
  // Find the product by ID
  const product = products.find((p) => p._id === p_id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Set default selected image if not already set
  if (!selectedImage) setSelectedImage(product.images[0]);

  return (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100 mt-12 mb-6">
      {/* Product Data */}
      <p className="flex items-center gap-3 font-light text-lg mb-3 ">
        <span className="text-gray-600">
          {product.category} / {product.subCategory}
        </span>{" "}
        / <span className="text-gray-800">{product.name}</span>
      </p>
      <div className="flex gap-12 flex-col sm:flex-row ">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-2">
          <div className="flex lg:flex-col md:flex-col overflow-x-auto justify-between sm:justify-normal lg:w-36 w-full">
            {product.images.map((image, index) => (
              <div key={index}>
                {" "}
                {/* Use index or a unique key */}
                <Image
                  onClick={() => setSelectedImage(image)} // Set clicked image as selected
                  className="w-full md:w-[100px] lg:h-[120px] lg:w-[130px] md:h-[100px] h-[70px] sm:mb-3 flex-shrink-0 cursor-pointer"
                  width={400}
                  height={300}
                  src={image}
                  alt={`Thumbnail ${index}`}
                />
              </div>
            ))}
          </div>
          <div className="w-full h-full md:h-[400px] md:w-[80%] lg:w-[80%]">
            <Image
              className="w-full h-auto"
              width={400}
              height={300}
              src={selectedImage} // Show the selected image here
              alt="Main product image"
            />
          </div>
        </div>

        {/* Product Info */}
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
                onClick={() => setQuantity((prev) => prev - 1)}
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
              <button className="btn border border-gray-500 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-lg ml-3">
                <FaRegHeart className="text-2xl" />
              </button>
              <button className="btn border border-gray-500 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-lg">
                <IoCartOutline className="hover:text-gray-500 cursor-pointer text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
