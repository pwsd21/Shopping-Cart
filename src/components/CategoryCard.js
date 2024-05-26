import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/search/searchSlice";

const CategoryCard = ({ category }) => {
  const dispatch = useDispatch();

  const handleCategoryClick = () => {
    dispatch(setSearchQuery(category));
  };
  return (
    <div onClick={handleCategoryClick}>
      <p className="text-yellow-600 cursor-pointer">{category}</p>
    </div>
  );
};

export default CategoryCard;
