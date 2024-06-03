import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const img = "Breadcrumbs.png";
const AccSign_up = () => {
  return (
    <div>
      {" "}
      <div className="relative">
        <img src={img} alt="img" />
        <div className="absolute text-gray-500 inset-0 flex items-center px-[7.5vw] gap-2">
          <CiHome className="" />
          <IoIosArrowForward />
          <h2 className="">Account</h2>
          <IoIosArrowForward />
          <h2 className="text-green-600">Create Account</h2>
        </div>
      </div>
    </div>
  );
};

export default AccSign_up;
