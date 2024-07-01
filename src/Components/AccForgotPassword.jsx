import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const img = "Breadcrumbs.png";
const AccForgotPassword = () => {
  return (
    <div>
      {" "}
      <div className="relative">
        <img src={img} alt="img" />
        <div className="absolute text-gray-500 inset-0 flex items-center px-[7.5vw] gap-2">
          <CiHome className="" />
          <IoIosArrowForward />
          <h2 className="">Forgot Password</h2>
        </div>
      </div>
    </div>
  );
};

export default AccForgotPassword;
