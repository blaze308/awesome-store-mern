import ProductList from "./components/productList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/productDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/products/:productId" element={<ProductDetail />} />
        <Route exact path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
