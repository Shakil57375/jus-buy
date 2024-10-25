"use client";
import React from "react";
import { useShopContext } from "@/app/context/ShopContext";
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
  const { getCartItems, products } = useShopContext();
  const cartItems = getCartItems(); // Get cart item objects

  // Extract IDs from cartItems and ensure they are strings
  const cartItemIds = cartItems.map((item) => String(item.id));

  // Filter the products based on the extracted cart IDs
  const cartProducts = products.filter((product) =>
    cartItemIds.includes(String(product._id))
  );

  const calculateSubtotal = (product, quantity) => {
    return (product.discountPrice || product.price) * quantity;
  };

  return (
    <div className="container mx-auto my-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-gray-600 mb-8">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <span>Cart</span>
      </div>

      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => {
                const product = products.find(
                  (p) => String(p._id) === String(cartItem.id)
                );
                const quantity = cartItem.quantity || 1;

                return (
                  <tr key={product._id} className="border-b border-gray-200">
                    {/* Product Column */}
                    <td className="px-4 py-4 flex items-center">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        height={80}
                        width={80}
                        className="w-20 h-20 object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600">
                          {product.description}
                        </p>
                      </div>
                    </td>

                    {/* Price Column */}
                    <td className="px-4 py-4">
                      ${product.discountPrice || product.price}
                    </td>

                    {/* Quantity Column */}
                    <td className="px-4 py-4">
                      <select
                        className="border border-gray-300 rounded-md px-3 py-1"
                        defaultValue={quantity}
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Subtotal Column */}
                    <td className="px-4 py-4">
                      ${calculateSubtotal(product, quantity)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CartPage;
