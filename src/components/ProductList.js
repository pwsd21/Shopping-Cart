import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = useSelector((state) => state.categories.products);
  const searchQuery = useSelector((state) => state.search);

  const filteredCategories = products.filter((item) => {
    return (
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return (
    <div className="flex justify-evenly flex-wrap ml-1 mr-1">
      {filteredCategories?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
