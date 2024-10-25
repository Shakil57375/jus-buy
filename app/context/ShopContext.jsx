"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { products as productsData } from "../../public/assets/assets.js"; // Adjust the path accordingly
import { Tooltip } from 'react-tippy'; // Import Tippy tooltip
import 'tippy.js/dist/tippy.css'; // Import Tippy CSS for styling

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const currency = "$";
    const [toastMessage, setToastMessage] = useState(""); // State for the toast message
    const [showToast, setShowToast] = useState(false); // State to control visibility

    const addToCart = (itemId, quantity = 1) => {
        let cartData = structuredClone(cartItems); // Clone the cart data

        if (cartData[itemId]) {
            // If the product exists in the cart
            cartData[itemId] += quantity; // Increment the existing quantity by the selected amount
        } else {
            // If the product is not in the cart, add it
            cartData[itemId] = quantity; // Set the quantity for the new item
        }

        setCartItems(cartData);
        setToastMessage(`Added ${quantity} item(s) to the cart!`); // Set toast message
        setShowToast(true); // Show toast

        setTimeout(() => {
            setShowToast(false); // Hide the toast after some time
        }, 2000); // Duration before the toast disappears (2 seconds)
    };

    const getCartCount = () => {
        let totalCount = 0;

        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalCount += cartItems[itemId]; // Sum the quantities
            }
        }

        return totalCount;
    };

    useEffect(() => {
        setProducts(productsData);
    }, []);

    return (
        <ShopContext.Provider
            value={{
                products,
                currency,
                search,
                setSearch,
                showSearch,
                setShowSearch,
                addToCart,
                cartItems,
                setCartItems,
                getCartCount,
                toastMessage, // Expose toast message
                showToast, // Expose toast visibility state
            }}
        >
            {children}
            {showToast && (
                <Tooltip
                    title={toastMessage}
                    position="top"
                    trigger="manual"
                    arrow={true}
                    onClickOutside={() => setShowToast(false)} // Hide on click outside
                >
                    <div className="fixed top-4 right-4 p-3 bg-gray-700 text-white rounded-lg shadow-lg">
                        {toastMessage}
                    </div>
                </Tooltip>
            )}
        </ShopContext.Provider>
    );
};

export const useShopContext = () => useContext(ShopContext);
