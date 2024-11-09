// src/SlidePopular.js
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
const img = "Rectangle 54.png";
const imgy = "Bannar (1).png";
const imgry = "Rectangle 54 (1).png";

const SlidePopular = () => {
  return (
    <div className="text-white mt-10 flex flex-col lg:flex-row justify-around px-4 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-10">
      <div className="relative w-full lg:w-[28vw]">
        <img src={img} alt="Best Deal" className="w-full rounded-lg" />
        <div className="absolute inset-0 flex flex-col py-10 items-center bg-opacity-50 rounded-lg">
          <span className="text-sm">Best Deal</span>
          <h2 className="text-2xl lg:text-4xl font-bold">Sale Of The Month</h2>
          <div className="text-lg my-2">
            <span>00 Days</span> : <span>02 Months</span> : <span>18 Mins</span>{" "}
            : <span>46 Secs</span>
          </div>
          <Link to='/Shop'
            style={{ borderRadius: "20px" }}
            className="flex items-center text-green-500 bg-white hover:bg-blue-700 font-bold py-2 px-4 rounded mt-2"
          >
            Shop Now <HiOutlineArrowSmallRight className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="relative w-full lg:w-[28vw]">
        <img src={imgy} alt="Low-Fat Meat" className="w-full rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center py-10 bg-opacity-50 rounded-lg">
          <span className="text-sm">85% Fat Free</span>
          <h2 className="text-2xl lg:text-4xl font-bold">Low-Fat Meat</h2>
          <span className="text-lg my-2">Standard at $79.99</span>
          <Link to='/Shop'
            style={{ borderRadius: "20px" }}
            className="flex items-center text-green-500 bg-white hover:bg-blue-700 font-bold py-2 px-4 rounded mt-2"
          >
            Shop Now <HiOutlineArrowSmallRight className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="relative w-full lg:w-[28vw]">
        <img src={imgry} alt="Fresh Fruit" className="w-full rounded-lg" />
        <div className="text-black absolute inset-0 flex flex-col items-center py-10 bg-opacity-50 rounded-lg">
          <span className="text-sm">Summer Sale</span>
          <h2 className="text-2xl lg:text-4xl font-bold">100% Fresh Fruit</h2>
          <span className="text-lg my-2">
            Up to <span className="font-bold">64% OFF</span>
          </span>
          <Link to='/Shop'
            style={{ borderRadius: "20px" }}
            className="flex items-center text-green-500 bg-white hover:bg-blue-700 font-bold py-2 px-4 rounded mt-2"
          >
            Shop Now <HiOutlineArrowSmallRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlidePopular;
