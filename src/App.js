import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Category from "./components/Category";
import CartItems from "./components/CartItems";
import SavedItems from "./components/SavedItems";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/saved" element={<SavedItems />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
