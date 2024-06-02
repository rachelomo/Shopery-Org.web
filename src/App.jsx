import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import BlogList from "./Pages/BlogList";
import Sign_in from "./Components/Sign_in";
import Shop from "./Pages/Shop";
import Pages from "./Pages/Pages";
import About_Us from "./Pages/About_Us";
// import About from "./Components/About";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Blog" element={<BlogList />} />
        <Route path="/About Us" element={<About_Us />} />
        <Route path="/Contact Us" element={<HomePage />} />
        <Route path="login" element={<Sign_in />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
