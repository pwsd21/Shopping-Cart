import React from "react";

import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productId = useParams();
  console.log(productId);
  return <div></div>;
};

export default ProductDetails;
