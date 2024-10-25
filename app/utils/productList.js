import React from "react";
import ProductItem from "@/components/custom/ProductItem";

const ProductList = ({ currentProducts }) => {
  return (
    <div className="basis-9/12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
        {currentProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
