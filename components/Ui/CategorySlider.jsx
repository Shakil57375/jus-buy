"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import React, { useState } from "react";

const CategorySlider = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  const categories = [
    {
      name: "Woman's Fashion",
      image:
        "https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg",
    },
    {
      name: "Men's Fashion",
      image:
        "https://img.freepik.com/free-photo/hip-bearded-young-man-putting-blank-sheet-paper-into-huge-front-pocket-his-red-gray-anorak-white-wall_346278-949.jpg?t=st=1729734597~exp=1729738197~hmac=b6eb45acde80c84e376fdc1e64aa6062f04d8a988ca5c541fce2031beab23279&w=996",
    },
    {
      name: "Electronics",
      image:
        "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309648.jpg?t=st=1729732731~exp=1729736331~hmac=f1dedeee947768db186188b92fc3fa4fdc14f850bcc00c86bf71c38bac11f494&w=996",
    },
    {
      name: "Sports & Outdoor",
      image:
        "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1729734540~exp=1729738140~hmac=75ce93166b2c4c1cf4df1923dade2c7d7f961f1e00d41e2f594fdb81a2465350&w=996",
    },
    {
      name: "Baby's & Toys",
      image:
        "https://img.freepik.com/free-photo/play-dough-background-with-octopus_23-2149700404.jpg?t=st=1729734662~exp=1729738262~hmac=ac6aa7fa7393885223840c3529d98d19630381bf34b86f5b83ca2cbafa7b00bf&w=996",
    },
    {
      name: "Beauty & Fashion",
      image:
        "https://img.freepik.com/free-photo/flowers-cosmetics-containers-arrangement_23-2149270030.jpg?t=st=1729732911~exp=1729736511~hmac=eaee08eb03f92f31518f1f04e87f6eec292b35db71f97322352401f119cf00d2&w=996",
    },
  ];

  // Function to handle button click
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 relative">
      {/* Swiper Slider */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation]}
        className="categorySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              {" "}
              {/* Next.js Image component */}
              <Image
                src={category.image}
                alt={category.name}
                width={200}
                height={200}
                className="object-contain h-[200px] w-[200px] bg-cover"
              />{" "}
              <h3 className="text-xl font-semibold text-orange-500">{category.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute -top-6 right-5 flex space-x-2">
        {/* Left Button */}
        <button
          onClick={() => handleButtonClick("prev")}
          className={`${
            activeButton === "prev"
              ? "bg-orange-500 text-white"
              : "bg-gray-300 text-gray-800"
          } swiper-button-prev-custom p-2 rounded-full shadow-md transition`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Button */}
        <button
          onClick={() => handleButtonClick("next")}
          className={`${
            activeButton === "next"
              ? "bg-orange-500 text-white"
              : "bg-gray-300 text-gray-800"
          } swiper-button-next-custom p-2 rounded-full shadow-md transition`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;
