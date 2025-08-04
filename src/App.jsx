import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Products from "./components/pages/Products";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
