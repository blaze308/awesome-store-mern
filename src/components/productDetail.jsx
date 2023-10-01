import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const { state } = location;
  if (!state || !state.title) {
    // Handle the case where 'title' is not available
    return <div>Product not found or missing information</div>;
  }
  const { title, image, price, _id, desc, category, createdAt } = state;
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default React.memo(ProductDetail);
