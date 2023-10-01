import RegistrationForm from "./register";
import ProductCard from "./components/productCard";
import ProductList from "./components/productList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/productDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:product_id" element={<ProductDetail />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
