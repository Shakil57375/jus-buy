"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
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
      <div className="w-full lg:w-3/4 border-l border-gray-400 px-4">
        <Slider {...settings} className="mt-8">
          <div>
            <Image
              src="/assets/banner-8.jpg"
              className="object-contain rounded-lg w-[450px] lg:w-full h-[300px]"
              alt="banner"
              width={450}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/assets/banner-9.jpg"
              className="object-contain rounded-lg w-[450px] lg:w-full h-[300px]"
              alt="banner"
              width={450}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/assets/banner-10.jpg"
              className="object-contain rounded-lg w-[450px] lg:w-full h-[300px]"
              alt="banner"
              width={450}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/assets/banner-11.jpg"
              className="object-contain rounded-lg w-[450px] lg:w-full h-[300px]"
              alt="banner"
              width={450}
              height={300}
            />
          </div>
         
        </Slider>
      </div>
    </div>
  );
};

export default HeroWithSidebar;
