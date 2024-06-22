import { Link } from "react-router-dom";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import UncoloredNavbar from "./UncoloredNavbar";

const Cart = ({ cartItems }) => {
  return (
    <div className="flex gap-2">
      <div className="flex items-center space-x-2">
        <CiHeart className="text-4xl hover:text-red-500 cursor-pointer" />
      </div>
      <hr className="border-l-2 border-gray h-5 my-2" />
      <div className="flex items-center space-x-2">
        <Link to="/cart">
          <CiShoppingCart className="text-4xl text-gray-800 hover:text-gray-600 cursor-pointer" />
        </Link>
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold">Shopping Cart:</span>
          <span className="text-[11px] font-bold">
            $
            {cartItems
              .reduce(
                (total, item) =>
                  total +
                  parseFloat(item.price.replace("$", "")) * item.quantity,
                0
              )
              .toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
