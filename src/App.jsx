import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import BlogList from "./Pages/BlogList";
import Sign_in from "./Components/Sign_in";
import Pages from "./Pages/Pages";
import About_Us from "./Pages/About_Us";
import Sign_up from "./Components/Sign_up";
import User_Dashboard from "./WhenRegLog/User_Dashboard";
import Shoplist from "./Pages/Shoplist";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import Contact_Us from "./Pages/Contact_Us";
import Faq from "./Pages/Faq";
import { AuthProvider } from "./context/AuthContext";

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
            <Route path="/dashboard" element={<User_Dashboard />} />
            <Route path="/faq" element={<Faq />} />
            {/* <Route path="/categories" element={<Categories />} /> */}
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
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
//to start a json server
// json-server --watch db.json --port 5000
// --watch/-w can be omitted, JSON Server 1+ watches for file changes by default
