import UncoloredNavbar from "../Components/UncoloredNavbar";
import ShopVegetable from "./ShopVegetable";
import { IoIosArrowDown } from "react-icons/io";

const img = "Filter 24px.png";
const Shop = () => {
  return (
    <div className="mb-10">
      <div>
        <UncoloredNavbar />
      </div>
      <div>
        <ShopVegetable />
        
      </div>
      <div className="flex items-center justify-between px-[7vw] mt-5">
        <button
          className="bg-green-600 border rounded flex items-center text-white gap-2 px-8 py-2"
          style={{ borderRadius: "20px" }}
        >
          Filter
          <img src={img} alt="img" className="w-4" />
        </button>
        <div className="flex items-center gap-5 border rounded px-8 py-2">
          <span>Sort by:</span>
          <span>Latest</span>
          <IoIosArrowDown />
        </div>
        <div>
          <span>
            <strong>52</strong>Results Found
          </span>
        </div>
      </div>
    </div>
  );
};

export default Shop;
