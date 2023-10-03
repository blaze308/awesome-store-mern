import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const location = useLocation();

  return (
    <div>
      <h4>{location.state.title}</h4>
      <img src={location.state.image} alt="image" />
      <h4>{location.state.desc}</h4>
    </div>
  );
};

export default ProductDetailPage;
