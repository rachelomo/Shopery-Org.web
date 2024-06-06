import { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import the FaBars icon for the mobile menu

const UncoloredNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="text-black py-2">
      <div className="px-[7.8vw] flex justify-between items-center md:justify-between md:h-10 ">
        <div className="flex ite    ms-center">
          <button onClick={toggleMenu} className="md:hidden">
            <FaBars />
          </button>
          <ul
            className={` md:flex space-x-8 ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <li>
              <Link
                to="/HomePage"
                className="flex items-center text-green-600 py-2 md:py-0 "
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
                to="/shop"
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
    </nav>
  );
};

export default UncoloredNavbar;
