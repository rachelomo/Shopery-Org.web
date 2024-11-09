import { useState } from "react";
import { FaPhoneVolume, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white py-2 relative">
      <div className="px-[7.8vw] flex justify-between items-center">
        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden z-50">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="flex items-center py-2 md:py-0">
              Home
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/Shop" className="flex items-center py-2 md:py-0 text-gray-400">
              Shop
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/Pages" className="flex items-center py-2 md:py-0 text-gray-400">
              Pages
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/Blog" className="flex items-center py-2 md:py-0 text-gray-400">
              Blog
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/About Us" className="flex items-center py-2 md:py-0 text-gray-400">
              About Us
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="flex items-center py-2 md:py-0 text-gray-400">
              Contact Us
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
        </ul>

        {/* Contact Button (Only visible on larger screens) */}
        <div className="md:flex items-center">
          <button className="flex items-center">
            <FaPhoneVolume className="mr-1" /> (210) 555-0114
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 left-0 h-full w-[70%] bg-black text-white flex flex-col items-start justify-center space-y-4 pl-8 transform transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden z-50`}
        >
          <li>
            <Link to="/" className="flex items-center py-2" onClick={toggleMenu}>
              Home
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/Shop" className="flex items-center py-2 text-gray-400" onClick={toggleMenu}>
              Shop
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/Pages" className="flex items-center py-2 text-gray-400" onClick={toggleMenu}>
              Pages
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/Blog" className="flex items-center py-2 text-gray-400" onClick={toggleMenu}>
              Blog
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/About Us" className="flex items-center py-2 text-gray-400" onClick={toggleMenu}>
              About Us
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="flex items-center py-2 text-gray-400" onClick={toggleMenu}>
              Contact Us
              <IoIosArrowDown className="ml-1" />
            </Link>
          </li>
        </ul>

        {/* Overlay */}
        {menuOpen && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-gray-600 opacity-50 z-40"
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
