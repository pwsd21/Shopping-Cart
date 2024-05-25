import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div>
      <p className="text-yellow-600 cursor-pointer">{category}</p>
    </div>
  );
};

export default CategoryCard;
