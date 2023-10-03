import ProductsPage from "./pages/productsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailPage from "./pages/productDetailPage";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import About from "./pages/about";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
