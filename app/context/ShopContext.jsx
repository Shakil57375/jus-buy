// context/ShopContext.js
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { products as productsData } from "../../public/assets/assets.js"; // Adjust the path accordingly

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const currency = "$";
  useEffect(() => {
    // Assuming you're using a static array for products
    setProducts(productsData);
  }, []);

  return (
    <ShopContext.Provider value={{ products, currency }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
