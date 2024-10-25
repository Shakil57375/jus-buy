"use client";
import { useShopContext } from "@/app/context/ShopContext";
import ProductItem from "@/components/custom/ProductItem";
import Title from "@/components/custom/Title";
import React from "react";

const WishlistPage = () => {
  const { getWishListItems, products } = useShopContext(); // Get products and wishlist
  const wishListItems = getWishListItems(); // Get wishlist item objects

  // Extract IDs from wishListItems and ensure they are strings
  const wishListItemIds = wishListItems.map((item) => String(item.id));

  // Filter the products based on the extracted wishlist IDs (ensure _id is also a string)
  const wishListProducts = products.filter((product) =>
    wishListItemIds.includes(String(product._id))
  );

  return (
    <div>
      <Title title={"Your Wishlist"}/>
      {wishListProducts.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 mt-10">
          {wishListProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
