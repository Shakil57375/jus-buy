// CartPage.js
"use client";
import React from "react";
import { useShopContext } from "@/app/context/ShopContext";
import ProductItem from "@/components/custom/ProductItem";
import Title from "@/components/custom/Title";

const CartPage = () => {
  const { getCartItems, products } = useShopContext(); // Get products and cart
  const cartItems = getCartItems(); // Get cart item objects

  // Extract IDs from cartItems and ensure they are strings
  const cartItemIds = cartItems.map((item) => String(item.id));

  // Filter the products based on the extracted cart IDs (ensure _id is also a string)
  const cartProducts = products.filter((product) =>
    cartItemIds.includes(String(product._id))
  );
  return (
    <div>
      <Title title={"Your Cart"}/>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 mt-10">
          {cartProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
