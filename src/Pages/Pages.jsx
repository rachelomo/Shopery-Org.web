import { useState } from "react";
import { CiHome } from "react-icons/ci";
import UncoloredNavbar from "../Components/UncoloredNavbar";
import { IoIosArrowForward } from "react-icons/io";
// import Subscribtion from "./Subscribtion";
import { Link } from "react-router-dom";

const img = "Breadcrumbs.png";
const imgry = "Illustration.png";

const Pages = () => {
  const [redirect, setRedirect] = useState(false);

  const redirectToHome = () => {
    // Redirect logic here
    setRedirect(true);
  };

  if (redirect) {
    // Redirect to home page
    window.location.href = "/";
  }

  return (
    <div>
      <div>
        <UncoloredNavbar />
      </div>
      <div>
        <div className="relative">
          <img src={img} alt="img" />
          <div className="absolute text-white inset-0 flex items-center px-[7.5vw] gap-2">
            <Link to="/">
              {" "}
              <CiHome className="" />
            </Link>
            <IoIosArrowForward />
            <h2 className="text-green-600">404 Error Page</h2>
          </div>
        </div>
      </div>
      {/* main page  */}
      <div className="flex flex-col items-center text-center my-20">
        <div className="w-1/2">
          <img src={imgry} alt="imgry" />
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-5">
            {" "}
            <h2 className="text-3xl font-bold">Oops! page not found</h2>
            <span className="text-gray-500 text-1xl">
              Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.{" "}
              <br />
              Maecenas sagittis tortor at metus mollis
            </span>
          </div>
          <button
            className="bg-green-600 text-white w-40 p-2 rounded-full"
            onClick={redirectToHome}
          >
            Back to Home
          </button>
        </div>
      </div>
      {/* <div>
        <Subscribtion />
      </div> */}
    </div>
  );
};

export default Pages;
