import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categorySlice";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <div className="flex justify-evenly border border-gray-400 p-8 m-5 bg-gray-50">
        {categories?.map((category) => (
          <div key={category.id}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
