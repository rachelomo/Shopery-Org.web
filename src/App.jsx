import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import FreshVegetable from "./Components/FreshVegetable";
import FreshFruit from "./Components/FreshFruit";
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
import Dashboard from "./Dashboard/Dashboard";
import Subscribtion from "./Pages/Subscribtion";
import ProtectedRoute from "./Components/ProtectedRoute";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";

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
            <Route path="/shopery/fresh-fruit" element={<FreshFruit />} />
            <Route path="/shopery/fresh-vegetable" element={<FreshVegetable />} />
            <Route path="/shopery/meat-fish" element={<FreshVegetable />} />
            <Route path="/shopery/beverages" element={<FreshVegetable />} />
            <Route path="/shopery/snacks" element={<FreshVegetable />} />
            <Route path="/shopery/chines-cabbage" element={<FreshVegetable />} />
            <Route path="/shopery/grape" element={<FreshVegetable />} />
            <Route path="/shopery/tomato" element={<FreshVegetable />} />
            <Route path="/shopery/organic-products" element={<FreshVegetable />} />
            <Route path="/shopery/fresh-vegetables" element={<FreshVegetable />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Shop" element={<Shoplist addToCart={addToCart} />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Blog" element={<BlogList />} />
            <Route path="/About Us" element={<About_Us />} />
            <Route path="/Contact" element={<Contact_Us />} />
            <Route path="/login" element={<Sign_in />} />
            <Route path="/register" element={<Sign_up />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/reset_password/:token" element={<ResetPassword />} />
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



// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import SignUp from "../src/registration/SignUp";
// import Home from "./Home.jsx";
// import Signing from "./Signed/Signing.jsx";
// import CopyWrite from "./LandPage/CopyWrite.jsx";
// import Medhouse from "./LandPage/Medhouse.jsx";
// import Nav from "./Nav.jsx";
// import Login from "./login/Login.jsx";
// import "./App.css";
// import BlogPath from "./links/BlogPath.jsx";
// import Purpular from "./links/Purpular.jsx";
// import Pricing from "./links/Pricing.jsx";
// import AboutPath from "./links/AboutPath.jsx";
// import Adding from "./links/Adding.jsx";
// import Cardsec from "./links/Cardsec.jsx";
// import Cardthd from "./links/Cardthd.jsx";
// import Addingft from "./links/Addingft.jsx";
// import Messageme from "./Message/Messageme.jsx";
// import Mapapi from "./LandPage/Mapapi.jsx";
// import Listing from "./links/Listing.jsx";
// import FaqPath from "./links/FaqPath.jsx";
// import FaqPathsec from "./links/FaqPathsec.jsx";
// import FaqTenant from "./links/FaqTenant.jsx";

// const App = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isNavVisible, setIsNavVisible] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   const handleNextStep = () => setCurrentStep(currentStep + 1);
//   const handlePrevStep = () => setCurrentStep(currentStep - 1);

//   useEffect(() => {
//     const handleScroll = () => setIsNavVisible(window.scrollY <= 100);
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const checkDevice = () => setIsMobile(window.innerWidth <= 768);
//     checkDevice();
//     window.addEventListener("resize", checkDevice);

//     return () => window.removeEventListener("resize", checkDevice);
//   }, []);

//   if (isMobile) {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '20%' }}>
//         <h1>This website is only available on desktop devices.</h1>
//       </div>
//     );
//   }

//   return (
//     <BrowserRouter>
//       {isNavVisible && <Nav className="nav" />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/map" element={<Mapapi />} />
//         <Route
//           path="/signup"
//           element={
//             <SignUp
//               currentStep={currentStep}
//               onNextStep={handleNextStep}
//               onPrevStep={handlePrevStep}
//             />
//           }
//         />
//         <Route path="/blogpath" element={<BlogPath />} />
//         <Route path="/card/2" element={<Cardsec />} />
//         <Route path="/card/3" element={<Cardthd />} />
//         <Route path="/purpular" element={<Purpular />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/aboutpath" element={<AboutPath />} />
//         <Route path="/adding" element={<Adding />} />
//         <Route path="/addingft" element={<Addingft />} />
//         <Route path="/listing" element={<Listing />} />
//         <Route path="/faqpath" element={<FaqPath />} />
//         <Route path="/faqpathsec" element={<FaqPathsec />} />
//         <Route path="/faqtenant" element={<FaqTenant />} />
//       </Routes>

//       {/* Optional: these components are global, so they appear on all routes */}
//       <Medhouse />
//       <Signing />
//       <CopyWrite />
//       <Messageme />
//     </BrowserRouter>
//   );
// };

// export default App;
