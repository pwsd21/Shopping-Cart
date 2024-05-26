import React from "react";
import { useDispatch } from "react-redux";
import { addCartItems, addSavedItems } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    dispatch(addCartItems(product));
    console.log(product);
  };

  const handleSave = () => {
    dispatch(addSavedItems(product));
  };
  return (
    <div className="border border-black flex flex-col justify-center items-center p-10 h-72 w-72 m-1 bg-gray-100 hover:bg-slate-300 cursor-pointer">
      <img src={product.images[0]} alt="product" className="h-32 w-32" />
      <h3>{product.title}</h3>
      <p>Ratings: ⭐ {product.rating}</p>
      <p className="pt-10">
        <button
          className="text-pink-600 mr-10"
          onClick={() => handleSave(product)}
        >
          🩷Save
        </button>
        <button
          className="text-green-600"
          onClick={() => handleAddCart(product)}
        >
          🛒Add to Cart
        </button>
      </p>
    </div>
  );
};

export default ProductCard;
