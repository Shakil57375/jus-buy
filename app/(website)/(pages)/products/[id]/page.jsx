"use client";
import { useShopContext } from "@/app/context/ShopContext";
import Loader from "@/components/custom/Loader";
import ProductInfo from "@/components/Ui/ProductInfo";
import RelatedProducts from "@/components/Ui/RelatedProducts";
import ReviewsSection from "@/components/Ui/ReviewsSection";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams(); // Get the 'id' from the dynamic route
  const { products, currency } = useShopContext();
  const [selectedImage, setSelectedImage] = useState(""); // Track selected image
  const [Size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const [dataNotFound, setDataNotFound] = useState(false); // Track if data is not found

  const p_id = parseFloat(id);

  // Find the product by ID
  const product = products.find((p) => p._id === p_id);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!product) {
        setDataNotFound(true);
      }
      setLoading(false);
    }, 3000); // 3 seconds before showing "not found"

    return () => clearTimeout(timeout);
  }, [product]);

  // Set default selected image if not already set
  if (!selectedImage && product) {
    setSelectedImage(product.images[0]);
  }

  // Show loader while data is loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader /> {/* Show your loader component */}
      </div>
    );
  }

  // If data is not found after loading
  if (dataNotFound) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100 mt-12 mb-6">
      {/* Product Data */}
      <p className="flex items-center gap-3 font-light text-lg mb-3 ">
        <span className="text-gray-600">
          {product.category} / {product.subCategory}
        </span>
        {" / "}
        <span className="text-gray-800">{product.name}</span>
      </p>

      <div className="flex gap-12 flex-col sm:flex-row ">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-2">
          <div className="flex lg:flex-col md:flex-col overflow-x-auto justify-between sm:justify-normal lg:w-36 w-full">
            {product.images.map((image, index) => (
              <div key={index}>
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
        <ProductInfo
          product={product}
          setQuantity={setQuantity}
          setSize={setSize}
          currency={currency}
          Size={Size}
          quantity={quantity}
        />
      </div>

      <div className="mt-24">
        <p className="bg-orange-500 text-lg py-4 rounded-lg text-white w-[291px] h-[58px] text-center">
          Description
        </p>
        <hr className="mt-4 border-1 border-orange-500" />
        <p className="mt-6">{product.description}</p>
      </div>

      <div>
        <ReviewsSection product={product} />
      </div>
      {/* related products */}
      <div className="mt-6">
        <RelatedProducts
          category={product.category}
          currentProductId={product._id}
          subCategory={product.subCategory}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
