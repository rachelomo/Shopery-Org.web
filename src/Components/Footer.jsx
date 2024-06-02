import { FaApplePay } from "react-icons/fa";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { SiDiscover } from "react-icons/si";
const Vector = "Add To Cart.png";
const plant = "plant 1.png";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:gap-40 justify-between">
          <div className=" lg:w-1/4">
            <div className="flex items-center">
              <img src={plant} alt="plant" className="w-7" />
              <h2 className="text-3xl ml-2 font-semibold">Ecobazar</h2>
            </div>
            <span className="text-gray-400 text-sm  mt-2 block">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </span>
            <span className="flex flex-col lg:flex-row gap-2 lg:gap-5 mt-5">
              <a href="/" className="border-b-2 border-blue-600">
                (219) 555-0114{" "}
              </a>
              <strong className="text-gray-600">or</strong>{" "}
              <a href="/" className="border-b-2 border-blue-600">
                Proxy@gmail.com
              </a>
            </span>
          </div>
          <div className="flex justify-between flex-col lg:flex-row gap-10 items-start lg:items-center lg:w-3/4">
            <div>
              <h2 className="text-lg font-semibold">My Account</h2>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Order History
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shopping Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Helps</h2>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Faqs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Proxy</h2>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Categories</h2>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Fruit & Vegetables
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Meat & Fish
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Bread & Bakery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Beauty & Health
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-gray-800 my-5" />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
          <span className="text-center lg:text-left">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </span>
          <div className="flex flex-wrap justify-center gap-5">
            <div className="border-2 w-20 rounded border-gray-500 h-[8vh] flex items-center justify-center">
              <FaApplePay className="text-5xl text-white" />
            </div>
            <div className="border-2 w-20 rounded border-gray-500 h-[8vh] flex items-center justify-center">
              <RiVisaLine className="text-5xl text-white" />
            </div>
            <div className="border-2 w-20 rounded border-gray-500 h-[8vh] flex items-center justify-center">
              <SiDiscover className="text-5xl text-white" />
            </div>
            <div className="border-2 w-20 rounded border-gray-500 h-[8vh] flex items-center justify-center">
              <RiMastercardFill className="text-5xl text-orange-600" />
            </div>
            <div className="border-2 w-20 rounded border-gray-500 h-[8vh] flex items-center relative">
              <img src={Vector} alt="Vector" className="w-5" />
              <div className="text-[13px] absolute ml-5">
                <p>Secure</p>
                <p className="font-bold">Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
