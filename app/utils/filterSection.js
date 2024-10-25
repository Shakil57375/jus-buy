import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FilterSection = ({
  selectedCategories,
  setSelectedCategories,
  selectedPriceRange,
  setSelectedPriceRange,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set this flag to true once the component has mounted (client-side)
    setIsClient(true);
  }, []);

  const handleCategoryToggle = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handlePriceRangeToggle = () => {
    setIsPriceRangeOpen(!isPriceRangeOpen);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceRangeChange = (e) => {
    const range = e.target.value;
    setSelectedPriceRange((prevRange) =>
      prevRange.includes(range)
        ? prevRange.filter((item) => item !== range)
        : [...prevRange, range]
    );
  };

  if (!isClient) {
    return null; // Ensure no client-dependent code runs on the server
  }

  return (
    <div>
      <p
        className="mb-3 text-sm font-medium text-orange-500 flex items-center cursor-pointer"
        onClick={handleCategoryToggle}
      >
        Categories{" "}
        {isCategoryOpen ? (
          <IoIosArrowUp className="ml-56 text-xl" />
        ) : (
          <IoIosArrowDown className="ml-56 text-xl" />
        )}
      </p>

      <div className={`pl-5 mt-2 py-1 ${isCategoryOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col gap-2 text-sm font-light">
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="Women"
              onChange={handleCategoryChange}
            />{" "}
            Women&apos;s Fashion
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="Men"
              onChange={handleCategoryChange}
            />{" "}
            Men&apos;s Fashion
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="Kids"
              onChange={handleCategoryChange}
            />{" "}
            Kid&apos;s Fashion
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="Electronics"
              onChange={handleCategoryChange}
            />{" "}
            Electronics
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="LifeStyle"
              onChange={handleCategoryChange}
            />{" "}
            Home & LifeStyle
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="Medicine"
              onChange={handleCategoryChange}
            />{" "}
            Medicine
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="Sports"
              onChange={handleCategoryChange}
            />{" "}
            Sports & Outdoors
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="BabyToy"
              onChange={handleCategoryChange}
            />{" "}
            Baby&apos;s Toys
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="Groceries"
              onChange={handleCategoryChange}
            />{" "}
            Groceries & Pets
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="HealthAndBeauties"
              onChange={handleCategoryChange}
            />{" "}
            Health & Beauties
          </label>
        </div>
      </div>

      <p
        className="mb-3 text-sm font-medium text-orange-500 flex items-center cursor-pointer"
        onClick={handlePriceRangeToggle}
      >
        Price{" "}
        {isPriceRangeOpen ? (
          <IoIosArrowUp className="ml-[267px] text-xl" />
        ) : (
          <IoIosArrowDown className="ml-[267px] text-xl" />
        )}
      </p>

      <div
        className={`pl-5 mt-2 py-1 ${isPriceRangeOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-2 text-sm font-light">
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="Value"
              onChange={handlePriceRangeChange}
            />{" "}
            Value under $20
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="Mid-range"
              onChange={handlePriceRangeChange}
            />{" "}
            MidRange $20-$60
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              value="High"
              onChange={handlePriceRangeChange}
            />{" "}
            High-end above $60
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
