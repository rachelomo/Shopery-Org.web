import { CiHome } from "react-icons/ci";
import UncoloredNavbar from "./UncoloredNavbar";
import { IoIosArrowForward } from "react-icons/io";
const img = "Breadcrumbs.png";
const Sign_in = () => {
  return (
    <div>
      <div>
        <UncoloredNavbar />
      </div>
      <div className="relative">
        <img src={img} alt="img" />
        <div className="absolute text-gray-500 inset-0 flex items-center px-[6.5vw] gap-2">
          <CiHome className="" />
          <IoIosArrowForward />
          <h2 className="">Account</h2>
          <IoIosArrowForward />
          <h2 className="text-green-600">Login</h2>
        </div>
      </div>
    </div>
  );
};

export default Sign_in;
