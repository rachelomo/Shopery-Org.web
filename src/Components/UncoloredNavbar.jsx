import { useState } from "react";
import { FaPhoneVolume, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const UncoloredNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="text-black py-2 relative">
      <div className="px-[7.8vw] flex justify-between items-center md:justify-between md:h-10">
        <div className="flex items-center">
          {/* Mobile menu toggle */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <ul
            className={`md:flex space-x-8 ${menuOpen ? "block" : "hidden"} md:block`}
          >
            <li>
              <Link
                to="/"
                className="flex items-center text-green-600 py-2 md:py-0"
              >
                Home
                <IoIosArrowDown className="mt-2" />
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="flex items-center py-2 md:py-0 text-gray-400"
              >
                Shop
                <IoIosArrowDown className="mt-2" />
              </Link>
            </li>
            <li>
              <Link
                to="/Pages"
                className="flex items-center py-2 md:py-0 text-gray-400"
              >
                Pages
                <IoIosArrowDown className="mt-2" />
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="flex items-center py-2 md:py-0 text-gray-400"
              >
                Blog
                <IoIosArrowDown className="mt-2" />
              </Link>
            </li>
            <li>
              <Link
                to="/About Us"
                className="flex items-center py-2 md:py-0 text-gray-400"
              >
                About Us
                <IoIosArrowDown className="mt-2" />
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="flex items-center py-2 md:py-0 text-gray-400"
              >
                Contact Us
                <IoIosArrowDown className="mt-2" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <button className="flex items-center">
            <FaPhoneVolume className="mr-1" /> (210) 555-0114
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-200 bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile menu */}
      <ul
        className={`fixed top-0 left-0 h-full w-[70%] bg-black text-white flex flex-col items-start justify-center space-y-4 pl-8 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <li>
          <Link
            to="/"
            className="flex items-center py-2"
            onClick={toggleMenu}
          >
            Home
            <IoIosArrowDown className="ml-1" />
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className="flex items-center py-2 text-gray-400"
            onClick={toggleMenu}
          >
            Shop
            <IoIosArrowDown className="ml-1" />
          </Link>
        </li>
        <li>
          <Link
            to="/Pages"
            className="flex items-center py-2 text-gray-400"
            onClick={toggleMenu}
          >
            Pages
            <IoIosArrowDown className="ml-1" />
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="flex items-center py-2 text-gray-400"
            onClick={toggleMenu}
          >
            Blog
            <IoIosArrowDown className="ml-1" />
          </Link>
        </li>
        <li>
          <Link
            to="/About Us"
            className="flex items-center py-2 text-gray-400"
            onClick={toggleMenu}
          >
            About Us
            <IoIosArrowDown className="ml-1" />
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="flex items-center py-2 text-gray-400"
            onClick={toggleMenu}
          >
            Contact Us
            <IoIosArrowDown className="ml-1" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UncoloredNavbar;
