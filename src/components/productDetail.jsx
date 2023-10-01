import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  var url = `http://localhost:4000/api/products/${productId}`;

  const fetchPoduct = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPoduct();
  }, []);

  return (
    <div>
      <h4>{product.title}</h4>
    </div>
  );
};

export default ProductDetail;
