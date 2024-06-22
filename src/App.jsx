import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import BlogList from "./Pages/BlogList";
import Sign_in from "./Components/Sign_in";
import Pages from "./Pages/Pages";
import About_Us from "./Pages/About_Us";
import Sign_up from "./Components/Sign_up";
import Shoplist from "./Pages/Shoplist";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import Contact_Us from "./Pages/Contact_Us";
import Faq from "./Pages/Faq";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Subscribtion from "./Pages/Subscribtion";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const updateCartItem = (item, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.name === item.name ? { ...i, quantity: quantity } : i
      )
    );
  };

  const removeCartItem = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.name !== item.name));
  };

  return (
    <AuthProvider>
      <Router>
        <div>
          <Header cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Shop" element={<Shoplist addToCart={addToCart} />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Blog" element={<BlogList />} />
            <Route path="/About Us" element={<About_Us />} />
            <Route path="/Contact" element={<Contact_Us />} />
            <Route path="/login" element={<Sign_in />} />
            <Route path="/register" element={<Sign_up />} />
            <Route
              path="/user-dashboard/*"
              element={
                <ProtectedRoute>
                  <Dashboard
                    cartItems={cartItems}
                    updateCartItem={updateCartItem}
                    removeCartItem={removeCartItem}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/faq" element={<Faq />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  updateCartItem={updateCartItem}
                  removeCartItem={removeCartItem}
                />
              }
            />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Subscribtion />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
