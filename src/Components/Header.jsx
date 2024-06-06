import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import SearchComponent from "./SearchComponent";
import Cart from "./Cart";
const plant = "plant 1.png";

const Header = ({ cartItems }) => {
  return (
    <nav className="py-1 md:px-8">
      {/* Location and language/currency selectors */}
      <div className="px-20 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-40">
        <span className="flex items-center text-gray-600 text-xs md:text-[12px]">
          <CiLocationOn className="md:text-[20px]" />
          Lincoin- 348w-48, Illinois, Chicago, USA
        </span>
        <div className="flex space-x-4 text-sm md:text-[9px]">
          <div className="relative flex items-center text-gray-600">
            ENG
            <IoIosArrowDown className="ml-1" />
          </div>
          <div className="relative flex items-center text-gray-600">
            USD
            <IoIosArrowDown className="ml-1" />
          </div>
          <div className="flex space-x-2">
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-800 text-sm md:text-base md:text-[11px]"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-600 hover:text-gray-800 text-sm md:text-base md:text-[11px]"
            >
              / Register
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-t-3 border-gray-200 my-2" />
      {/* Application name/logo, search component, and cart */}
      <div className="px-4 sm:px-6 lg:px-20 bg-white flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center lg:mb-0">
          <img src={plant} alt="plant" className="mr-2 text-green-600 w-8" />
          <h2 className="text-2xl font-bold text-gray-600">
            <Link to="/">Ecobazar</Link>
          </h2>
        </div>
        <div className="w-full lg:w-auto flex justify-center mb-4 lg:mb-0">
          <SearchComponent />
        </div>
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
