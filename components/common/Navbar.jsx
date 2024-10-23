// Import necessary Next.js components
"use client";
import { FaHeart, FaUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";
import Image from "next/image"; // For optimized image rendering
import Link from "next/link"; // Use Next.js link component for routing
import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { Poppins } from "next/font/google";
// import { ShopContext } from "../context/ShopContext"; // Assuming ShopContext is server/client compatible
const font = Poppins({ weight: "400", subsets: ["latin"] });
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  //   const { setShowSearch, getCartCount } = useContext(ShopContext);

  //   // Function to handle search icon click
  //   const handleSearchClick = () => {
  //     setShowSearch(true); // Open the search modal
  //   };

  return (
    <div className="w-full py-8 flex items-center justify-between">
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
      <div className="flex items-center space-x-6">
        <div
          //   onClick={handleSearchClick}
          className="flex items-center  border-gray-300 rounded p-2 bg-gray-100 w-[243px]"
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border-none outline-none flex-1 bg-transparent px-2 py-1"
          />
          <CiSearch className="hover:text-gray-500 cursor-pointer text-2xl" />
        </div>
        <div className="group relative">
          <Link href="/login">
            <FaUser className="hover:text-gray-500 cursor-pointer text-3xl" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link href="/wishlist">
          <FaHeart className="text-red-500 text-2xl" />
        </Link>
        <Link href="/cart" className="relative">
          <IoBagOutline className="hover:text-gray-500 cursor-pointer text-3xl" />
          <span className="absolute bottom-0 right-0 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            {/* {getCartCount()} */}0
          </span>
        </Link>
        <MdOutlineMenuOpen
          onClick={() => setVisible(true)}
          className="hover:text-gray-500 cursor-pointer text-3xl sm:hidden"
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
            href="/collection"
            onClick={() => setVisible(false)}
            className="hover:text-gray-500 py-6 pl-6 border"
          >
            COLLECTION
          </Link>
          <Link
            href="/about"
            onClick={() => setVisible(false)}
            className="hover:text-gray-500 py-6 pl-6 border"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            onClick={() => setVisible(false)}
            className="hover:text-gray-500 py-6 pl-6 border"
          >
            CONTACT
          </Link>
          <button className="border rounded-full px-4 font-medium text-sm hover:bg-gray-100 py-6 pl-6">
            Admin Panel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
