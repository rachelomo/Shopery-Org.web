import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { BsBoxSeam } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import Navbar from "../Components/Navbar";
import Categories from "./Categories";

const img = "Bannar Big (1).png";
const imgy = "BG.png";
const imgry = "Bannar.png";

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row mt-10 gap-3 justify-center px-4 lg:px-0">
        <div className="relative border border-gray-300 rounded-lg overflow-hidden bg-green-600 h-[50vh] lg:h-[75vh] w-full lg:w-[60vw]">
          <img src={img} alt="img" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white bg-black bg-opacity-50 space-y-4 p-4 lg:px-20">
            <h2 className="text-2xl lg:text-5xl font-semibold">
              Fresh & Healthy <br /> Organic Food
            </h2>
            <div className="relative text-lg px-5">
              Sale up to{" "}
              <button className="bg-orange-600 text-white px-2 py-1 pl-5 pr-5 rounded">
                30% OFF
              </button>
            </div>
            <p className="text-xs lg:text-sm  px-5">
              Free Shipping on all your orders
            </p>
            <hr className="border-l-2 border-green-600 h-[5vw] my-2 absolute bottom-[13vw]" />
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded mt-4">
              shop now <HiOutlineArrowSmallRight className="ml-2" />
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg overflow-hidden h-[50vh] lg:h-[75vh] relative w-full lg:w-[25vw]">
          <div className="relative h-1/2">
            <img src={imgy} alt="img1" className="h-full w-full object-cover" />
            <div className="absolute top-0 left-0 w-full p-4 text-black bg-black bg-opacity-0">
              <p className="text-sm lg:text-lg">Summer Sale</p>
              <h2 className="text-xl lg:text-2xl font-bold">75% OFF</h2>
              <span className="block mt-2 text-xs lg:text-sm">
                only fruit and vegetable
              </span>
              <button className="mt-4 px-4 py-2 text-xs lg:text-sm bg-green-600 text-white rounded-lg flex items-center">
                shop now <HiOutlineArrowSmallRight className="ml-2" />
              </button>
            </div>
          </div>
          <img src={imgry} alt="img2" className="h-1/2 w-full object-cover" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 mb-20 p-4">
        <div className="flex items-center font-bold pl-3 w-full sm:w-auto mb-4 sm:mb-0">
          <MdLocalShipping className="text-green-600 text-2xl" />
          <div className="pl-3 text-xs sm:text-base">
            <h2>Free Shipping</h2>
            <p>Free Shipping ON All Your Order</p>
          </div>
        </div>
        <div className="flex items-center font-bold w-full sm:w-auto mb-4 sm:mb-0">
          <RiCustomerService2Fill className="text-green-600 text-2xl" />
          <div className="pl-3 text-xs sm:text-base">
            <h2>Customer Support 24/7</h2>
            <p>instant access to support</p>
          </div>
        </div>
        <div className="flex items-center font-bold w-full sm:w-auto mb-4 sm:mb-0">
          <GrSecure className="text-green-600 text-2xl" />
          <div className="pl-3 text-xs sm:text-base">
            <h2>100% instant payment</h2>
            <p>we ensure your payment is safe</p>
          </div>
        </div>
        <div className="flex items-center font-bold w-full sm:w-auto">
          <BsBoxSeam className="text-green-600 text-2xl" />
          <div className="pl-3 text-xs sm:text-base">
            <h2>Money-Back Guarantee</h2>
            <p>30 Days Money-Back Guarantee</p>
          </div>
        </div>
      </div>

      <Categories />
    </div>
  );
};

export default LandingPage;
