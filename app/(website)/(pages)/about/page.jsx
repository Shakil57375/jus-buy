// pages/about.js
"use client";
import Image from "next/image";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";

const About = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Lyod Gomez",
      text: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.",
    },
    {
      name: "Lyod Gomez",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.",
    },
  ]);

  return (
    <div className="flex flex-col items-center">
      {/* Our Story Section */}
      <div className="flex flex-col items-center justify-between md:flex-row mb-10">
        <div className="basis-1/2">
          <h2 className="text-3xl font-bold p-6">Our Story</h2>
          <p className="text-gray-600 p-6">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
            <br />
            <br />
            Exclusive has more than 1 million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="basis-1/2 justify-end self-end">
          <Image
            src="/assets/instagram-2.jpg" // Replace with your image path
            alt="Shopping Illustration"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex items-center justify-between lg:flex-row flex-col gap-6 mb-10">
        <div className="border p-8 rounded-lg shadow-md text-center space-y-6">
          <div className="flex justify-center items-center">
            <div className="bg-orange-200 p-3 rounded-full w-24 h-24 flex items-center justify-center">
              <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full">
                <AiFillHome className="text-white text-3xl" />
              </div>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-black">10.5k</h3>
          <p className="text-black text-lg">Sellers active on our site</p>
        </div>
        <div className="border bg-orange-600 p-8 rounded-lg shadow-md text-center space-y-6">
          <div className="flex justify-center items-center">
            <div className="bg-orange-200 p-3 rounded-full w-24 h-24 flex items-center justify-center">
              <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full">
                <CiDollar className="text-white text-3xl" />
              </div>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white">33k</h3>
          <p className="text-white text-lg">Monthly Product Sale</p>
        </div>

        <div className="border p-8 rounded-lg shadow-md text-center space-y-6">
          <div className="flex justify-center items-center">
            <div className="bg-orange-200 p-3 rounded-full w-24 h-24 flex items-center justify-center">
              <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full">
                <FaUsers className="text-white text-3xl" />
              </div>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-black">45.5k</h3>
          <p className="text-black text-lg">Customers active on our site</p>
        </div>

        <div className="border p-8 rounded-lg shadow-md text-center space-y-6">
          <div className="flex justify-center items-center">
            <div className="bg-orange-200 p-3 rounded-full w-24 h-24 flex items-center justify-center">
              <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full">
                <TbMoneybag className="text-white text-3xl" />
              </div>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-black">25k</h3>
          <p className="text-black text-lg">Annual gross sale on our site</p>
        </div>
      </div>
    </div>
  );
};

export default About;
