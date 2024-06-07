import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const img = "Breadcrumbs.png";
const ShopVegetable = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="relative">
          <img src={img} alt="img" />
          <div className="absolute text-white inset-0 flex items-center px-[7.5vw] gap-2">
            <Link to="/">
              {" "}
              <CiHome className="" />
            </Link>
            <IoIosArrowForward />
            <h2 className="text-green-600">Shop</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopVegetable;
