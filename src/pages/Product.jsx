import React from "react";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

function Product() {
  return (
    <div>
      {/* ---------------------------------- Category ------------------------------------ */}
      <div className="pb-10">
        <Category />
      </div>
      <div className="w-full">
        <ProductCard />
      </div>
    </div>
  );
}

export default Product;
