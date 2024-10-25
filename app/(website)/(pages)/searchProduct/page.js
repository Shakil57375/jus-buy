"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useShopContext } from "@/app/context/ShopContext";
import Title from "@/components/custom/Title";
import SearchBar from "@/components/custom/Searchbar";
import FilterSection from "@/app/utils/filterSection";
import ProductList from "@/app/utils/productList";
import Pagination from "@/app/utils/pagination";

const Collection = () => {
  const { products, search, showSearch } = useShopContext();
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
          <FilterSection
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
          />
        </div>

        {/* Products Section */}
        <div className="basis-9/12">
          {/* Search Products */}
            <SearchBar />

          {/* Check if there are no products after filtering */}
          {currentProducts.length === 0 ? (
            <p className="text-center text-lg font-medium text-gray-600 mt-28">
              No products found matching your criteria.
            </p>
          ) : (
            <>
              {/* Display Products */}
              <ProductList currentProducts={currentProducts} />

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
