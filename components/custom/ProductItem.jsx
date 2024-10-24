"use client";
import "swiper/css";
import "swiper/css/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { useShopContext } from "@/app/context/ShopContext";

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
                    <FaRegHeart className="text-gray-500" />
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
          <div className="flex items-center gap-1">
            <Rating style={{ maxWidth: 100 }} readOnly value={product.rating} />
            <p>({product.ratingCount})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
