import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItems,
  addSavedItems,
  removeSavedItems,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const savedItems = useSelector((store) => store.cart.savedItems);

  const handleAddCart = () => {
    dispatch(addCartItems(product));
  };

  const handleAddSave = () => {
    dispatch(addSavedItems(product));
  };

  const handleUnsave = () => {
    dispatch(removeSavedItems(product));
  };

  const handleSave = () => {
    if (savedItems.includes(product)) {
      handleUnsave();
    } else {
      handleAddSave();
    }
  };
  return (
    <>
      <div className="border border-black flex flex-col justify-center items-center p-10 h-72 w-72 m-1 bg-gray-100 hover:bg-slate-300 cursor-pointer">
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} alt="product" className="h-32 w-32" />
          <h3>{product.title}</h3>
        </Link>
        <p>Ratings: ⭐ {product.rating}</p>
        <p className="pt-10">
          <button className="text-pink-600 mr-10" onClick={handleSave}>
            {!savedItems.includes(product) ? "🩷Save" : "Saved"}
          </button>
          <button className="text-green-600" onClick={handleAddCart}>
            🛒Add to Cart
          </button>
        </p>
      </div>
    </>
  );
};

export default ProductCard;
