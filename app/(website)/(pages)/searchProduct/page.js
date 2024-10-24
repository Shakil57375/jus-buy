"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useShopContext } from "@/app/context/ShopContext";
import Title from "@/components/custom/Title";
import ProductItem from "@/components/custom/ProductItem";
import SearchBar from "@/components/custom/Searchbar";

const Collection = () => {
  const { products, search, showSearch } = useShopContext();
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(true);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true); // Manage toggle state

  const handleCategoryToggle = () => {
    setIsCategoryOpen(!isCategoryOpen); // Toggle the state on click
  };

  const handlePriceRangeToggle = () => {
    setIsPriceRangeOpen(!isPriceRangeOpen);
  };

  // Manage state for price range filter
  const handlePriceRangeChange = (e) => {
    const range = e.target.value;
    setSelectedPriceRange((prevRange) =>
      prevRange.includes(range)
        ? prevRange.filter((item) => item !== range)
        : [...prevRange, range]
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Toggle selection for categories
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    if (selectedPriceRange.length > 0) {
      productsCopy = productsCopy.filter((item) => {
        if (selectedPriceRange.includes("Value")) {
          return item.price <= 20;
        }
        if (selectedPriceRange.includes("Mid-range")) {
          return item.price > 20 && item.price <= 60;
        }
        if (selectedPriceRange.includes("High")) {
          return item.price > 60;
        }
        return true;
      });
    }

    setFilteredProducts(productsCopy);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [selectedCategories, search, selectedPriceRange, showSearch]);

  return (
    <div>
      <div className="flex flex-col justify-between items-start sm:flex-row gap-1 sm:gap-10 pt-10 border-t mb-8">
        {/* Filter Options */}
        <div className="basis-3/12">
          <Title title="This Month" subtitle="New Arrival" />
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            <span className="w-full text-2xl font-bold bg-orange-500 py-3 px-2 text-white flex items-start justify-start rounded-xl">
              Filters
            </span>
            <IoIosArrowDown
              className={`text-2xl sm:hidden ${showFilter ? "rotate-180" : ""}`}
            />
          </p>

          {/* Category Filter */}
          <div>
            <p
              className="mb-3 text-sm font-medium text-orange-500 flex items-center cursor-pointer"
              onClick={handleCategoryToggle}
            >
              Categories{" "}
              {isCategoryOpen ? (
                <IoIosArrowUp className="ml-56 text-xl" /> // Up arrow when open
              ) : (
                <IoIosArrowDown className="ml-56 text-xl" /> // Down arrow when closed
              )}
            </p>
            <div
              className={`pl-5 mt-2 py-1 ${
                isCategoryOpen ? "block" : "hidden"
              }`}
            >
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
            {/* Price Filter */}
            <div>
              <p
                className="mb-3 text-sm font-medium text-orange-500 flex items-center cursor-pointer"
                onClick={handlePriceRangeToggle}
              >
                Price{" "}
                {isPriceRangeOpen ? (
                  <IoIosArrowUp className="ml-[267px] text-xl" /> // Up arrow when open
                ) : (
                  <IoIosArrowDown className="ml-[267px] text-xl" /> // Down arrow when closed
                )}
              </p>
              <div
                className={`pl-5 mt-2 py-1 ${
                  isPriceRangeOpen ? "block" : "hidden"
                }`}
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
          </div>
        </div>

        {/* Products Section */}
        <div className="basis-9/12">
          <SearchBar />
          {/* Display Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
            {currentProducts.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              onClick={handlePrevPage}
              className={`px-3 py-1 border ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 border ${
                  index + 1 === currentPage ? "bg-orange-500 text-white" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className={`px-3 py-1 border ${
                currentPage === totalPages ? "cursor-not-allowed" : ""
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
