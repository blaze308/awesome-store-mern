import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

const ProductList = () => {
  const url = "http://localhost:4000/api/products";
  const [products, setProducts] = useState([]);

  const fetchPoducts = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPoducts();
  }, []);

  return (
    <div className=" m-3 grid grid-cols-2 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
