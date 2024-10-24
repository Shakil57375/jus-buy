// Import necessary Next.js components
"use client";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline, IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";
import Image from "next/image"; // For optimized image rendering
import Link from "next/link"; // Use Next.js link component for routing
import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { Poppins } from "next/font/google";
import { useShopContext } from "@/app/context/ShopContext";
// import { ShopContext } from "../context/ShopContext"; // Assuming ShopContext is server/client compatible
const font = Poppins({ weight: "400", subsets: ["latin"] });
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const { setShowSearch, getCartCount } = useShopContext();

  // Function to handle search icon click
  const handleSearchClick = () => {
    setShowSearch(true); // Open the search modal
  };

  return (
    <div className="max-w-7xl mx-auto px-10 lg:px-0 flex items-center justify-between py-5 border-gray-400 border-b">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center space-x-2 text-xl font-semibold"
      >
        <Image src="/assets/logo.png" alt="Logo" width={152} height={52} />
      </Link>
      {/* Navigation Links */}
      <div className="hidden space-x-8 text-sm font-medium lg:items-center lg:flex ">
        <Link
          href="/"
          className={`hover:text-gray-500 text-base ${font.className} ${
            pathname === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/contact"
          className={`hover:text-gray-500 text-base ${font.className} ${
            pathname === "/contact" ? "underline" : ""
          }`}
        >
          Contact
        </Link>
        <Link
          href="/about"
          className={`hover:text-gray-500 text-base ${font.className} ${
            pathname === "/about" ? "underline" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/signup"
          className={`hover:text-gray-500 text-base ${font.className} ${
            pathname === "/signup" ? "underline" : ""
          }`}
        >
          Sign up
        </Link>
        <Link
          href="/signin"
          className={`hover:text-gray-500 text-base ${font.className} ${
            pathname === "/signin" ? "underline" : ""
          }`}
        >
          Sign in
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Link
          href={"/searchProduct"}
          onClick={handleSearchClick}
          className="flex items-center border-gray-300 rounded p-0 lg:p-2 bg-transparent lg:bg-gray-100 w-full lg:w-[243px]"
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border-none outline-none flex-1 bg-transparent px-2 py-1 hidden lg:block"
          />
          <CiSearch className="hover:text-gray-500 cursor-pointer !text-3xl" />
        </Link>

        <Link href="/wishlist">
          <FaRegHeart className="!text-3xl" />
        </Link>
        <Link href="/cart" className="relative">
          <IoCartOutline className="hover:text-gray-500 cursor-pointer !text-3xl" />
          <span className="absolute bottom-0 right-0 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            {/* {getCartCount()} */}0
          </span>
        </Link>
        <MdOutlineMenuOpen
          onClick={() => setVisible(true)}
          className="hover:text-gray-500 cursor-pointer !text-3xl sm:hidden"
          size={100}
        />
      </div>

      {/* Sidebar Menu for Small Screen */}
      <div
        className={`absolute top-0 right-0 left-0 overflow-hidden bg-white transition-all cursor-pointer ${
          visible ? "w-full h-screen" : "w-0"
        } z-50`}
      >
        <div className="flex flex-col text-gray-600 Playwrite">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <IoIosArrowBack className="hover:text-gray-500 cursor-pointer text-3xl sm:hidden rotate-180" />
            <p>Back</p>
          </div>
          <Link
            href="/"
            onClick={() => setVisible(false)}
            className="hover:text-gray-500 py-6 pl-6 border"
          >
            HOME
          </Link>
          <Link
            href="/contact"
            onClick={() => setVisible(false)}
            className="hover:text-gray-500 py-6 pl-6 border"
          >
            Contact
          </Link>
          <Link
            href="/about"
            onClick={() => setVisible(false)}
            className="hover:text-gray-500 py-6 pl-6 border"
          >
            ABOUT
          </Link>
          <Link
            href="/signup"
            onClick={() => setVisible(false)}
            className="hover:text-gray-500 py-6 pl-6 border"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            onClick={() => setVisible(false)}
            className="hover:text-gray-500 py-6 pl-6 border"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
