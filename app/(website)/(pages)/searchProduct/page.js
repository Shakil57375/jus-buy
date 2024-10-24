"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useShopContext } from "@/app/context/ShopContext";
import Title from "@/components/custom/Title";
import ProductItem from "@/components/custom/ProductItem";
import SearchBar from "@/components/custom/Searchbar";

const Collection = () => {
  const { products, search, showSearch } = useShopContext();
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; // Define how many products per page

  // Initially load all products
  useEffect(() => {
    setFilteredProducts(products); // Initially, show all products
  }, [products]);

  // Toggle selection for categories
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories(
      (prevCategories) =>
        prevCategories.includes(category)
          ? prevCategories.filter((item) => item !== category) // Remove if already selected
          : [...prevCategories, category] // Add if not selected
    );
  };

  // Toggle selection for subcategories
  const handleSubCategoryChange = (e) => {
    const subCategory = e.target.value;
    setSelectedSubCategories(
      (prevSubCategories) =>
        prevSubCategories.includes(subCategory)
          ? prevSubCategories.filter((item) => item !== subCategory) // Remove if already selected
          : [...prevSubCategories, subCategory] // Add if not selected
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice(); // Start with all products

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
    if (selectedSubCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedSubCategories.includes(item.subCategory)
      );
    }
    setFilteredProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter(); // When sorting by relevance, just apply filters
        break;
    }
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

  // Apply filters and search when categories, subcategories, or search term change
  useEffect(() => {
    applyFilter();
  }, [selectedCategories, selectedSubCategories, search, showSearch]);

  // Apply sorting when sort type changes
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div>
      <SearchBar />
      <div className="flex flex-col justify-between items-start sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Options */}
        <div className="basis-2/12">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS{" "}
            <IoIosArrowDown
              className={`text-2xl sm:hidden ${showFilter ? "rotate-180" : ""}`}
            />
          </p>

          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 mt-6 py-3 sm:block ${
              showFilter ? "" : "hidden"
            }`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Men"
                  onChange={handleCategoryChange}
                />{" "}
                Men
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Women"
                  onChange={handleCategoryChange}
                />{" "}
                Women
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Kids"
                  onChange={handleCategoryChange}
                />{" "}
                Kids
              </label>
            </div>
          </div>

          {/* Subcategory Filter */}
          <div
            className={`border border-gray-300 pl-5 my-5 py-3 sm:block ${
              showFilter ? "" : "hidden"
            }`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Topware"
                  onChange={handleSubCategoryChange}
                />{" "}
                Topware
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Bottomware"
                  onChange={handleSubCategoryChange}
                />{" "}
                Bottomware
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Winterware"
                  onChange={handleSubCategoryChange}
                />{" "}
                Winterware
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Fullbodyware"
                  onChange={handleSubCategoryChange}
                />{" "}
                Fullbodyware
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  value="Summerware"
                  onChange={handleSubCategoryChange}
                />{" "}
                Summerware
              </label>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="basis-10/12">
          <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
            <Title
              title="All Collections"
              subtitle="Checkout our collections"
            />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2 h-8"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

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
                  index + 1 === currentPage ? "bg-gray-800 text-white" : ""
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
