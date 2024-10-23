"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";
import Image from "next/image";

const HeroWithSidebar = () => {
  // List of categories
  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  // State to manage checked categories
  const [checkedCategories, setCheckedCategories] = useState([]);

  // Toggle checked categories
  const handleCheckboxChange = (category) => {
    if (checkedCategories.includes(category)) {
      setCheckedCategories(
        checkedCategories.filter((item) => item !== category)
      );
    } else {
      setCheckedCategories([...checkedCategories, category]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 mb-10">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md my-8">
        <h3 className="font-semibold text-lg mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center">
              <p className="mr-2">{category}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Carousel */}
      <div className="w-full lg:w-3/4 border-l border-gray-400 pl-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-8"
          breakpoints={{
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Image
              src="/assets/banner-8.jpg"
              className="object-contain rounded-lg w-[450px] lg:w-full h-[350px]"
              alt="banner"
              width={450}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/banner-9.jpg"
              className="object-contain rounded-lg w-[450px] lg:w-full h-[350px]"
              alt="banner"
              width={450}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/banner-10.jpg"
              className="object-contain rounded-lg w-[450px] lg:w-full h-[350px]"
              alt="banner"
              width={450}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/banner-11.jpg"
              className="object-contain rounded-lg w-[450px] lg:w-full h-[350px]"
              alt="banner"
              width={450}
              height={350}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroWithSidebar;
