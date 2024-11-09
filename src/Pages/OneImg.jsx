import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const img = "Discount Bannar.png";

const OneImg = () => {
  return (
    <div className="flex justify-center mt-8 px-4 md:px-[7vw]">
      <div className="relative w-full max-w-7xl">
        <img
          src={img}
          alt="Summer Sale Discount Banner"
          className="w-full h-auto rounded-lg"
        />
        <div className="text-white absolute inset-0 flex flex-col items-end justify-center bg-black bg-opacity-50 rounded-lg p-4 md:p-8 lg:p-12 space-y-2 md:space-y-4 lg:space-y-6">
          <span className="text-xs md:text-lg lg:text-xl">SUMMER SALE</span>
          <h2 className="font-bold text-sm md:text-2xl lg:text-3xl text-right leading-snug md:leading-normal">
            <strong className="text-orange-400">37%</strong>{" "}
            <strong>OFF</strong>
          </h2>
          <span className="text-xs md:text-sm lg:text-base text-gray-300 text-right leading-tight md:leading-normal">
            Free on all your orders, Free Shipping, and 30 days{" "}
            <br className="hidden md:inline" />
            money-back guarantee
          </span>
          <Link to="/Shop"
            style={{ borderRadius: "20px" }}
            className="flex items-center bg-green-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 md:px-10 rounded mt-2 text-xs md:text-base"
          >
            Shop Now <HiOutlineArrowSmallRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OneImg;
