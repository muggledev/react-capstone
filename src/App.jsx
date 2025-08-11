import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./components/pages/About";
import Cart from "./components/pages/CartContext";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Products from "./components/pages/Products";
import NotFound from "./components/pages/NotFound";
import { CartProvider } from "./components/pages/CartContext";

import "./styles/pages/app.scss";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="page-container">
          <Header />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/product/:id" component={Product} />
              <Route path="/cart" component={Cart} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
