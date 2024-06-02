import { CiHeart, CiShoppingCart } from "react-icons/ci";
const Cart = () => {
  return (
    <div className="flex gap-2">
      <div className="flex items-center space-x-2">
        <CiHeart className="text-4xl hover:text-red-500 cursor-pointer" />
      </div>
      <hr className="border-l-2 border-gray h-5 my-2" />
      <div className="flex items-center space-x-2">
        <CiShoppingCart className="text-4xl text-gray-800 hover:text-gray-600 cursor-pointer" />
        <div className="flex flex-col">
          {" "}
          <span className="text-[11px] font-semibold">Shopping Cart:</span>
          <span className="text-[11px] font-bold">$57.00</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
