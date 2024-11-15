import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UncoloredNavbar from "./UncoloredNavbar";
import ShopVegetable from "../Pages/ShopVegetable";
import { TiTimes } from "react-icons/ti";
import { HiMiniMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";

const CartPage = ({ cartItems, updateCartItem, removeCartItem, applyCoupon, isLoggedIn }) => {
  const [localCartItems, setLocalCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setLocalCartItems(cartItems);
  }, [cartItems]);

  const handleQuantityChange = (index, quantity) => {
    setLocalCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(quantity, 0) } : item
      )
    );
  };

  const handleUpdateCart = () => {
    localCartItems.forEach((item) => {
      updateCartItem(item, item.quantity);
    });
  };

  const calculateSubtotal = () => {
    return localCartItems.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );
  };

  // const handleApplyCoupon = () => {
  //   const discountAmount = applyCoupon(couponCode);
  //   if (discountAmount) {
  //     setDiscount(discountAmount);
  //   } else {
  //     alert("Invalid coupon code.");
  //   }
  // };

  const subtotal = calculateSubtotal();
  const total = subtotal - discount;

  // New function to handle checkout process
  const handleProceedToCheckout = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      alert("You need to log in before proceeding to checkout.");
      navigate("/login", { state: { from: "/checkout" } });
    }
  };
  const handleApplyCoupon = () => {
    const discountAmount = applyCoupon(couponCode); 
    
    // Debugging outputs
    console.log("Coupon Code entered:", couponCode);
    console.log("Discount Amount from applyCoupon function:", discountAmount);
  
    if (discountAmount) {
      setDiscount(discountAmount);
      console.log("Discount successfully applied:", discountAmount);
    } else {
      alert("Invalid coupon code.");
    }
  };
  
  return (
    <div>
      <UncoloredNavbar />
      <ShopVegetable />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center mt-4">My Shopping Cart</h2>
        <div className="flex flex-col lg:flex-row w-full lg:px-20 my-5">
          <div className="w-full lg:w-3/4 border-2 p-2">
            {localCartItems.length > 0 ? (
              <div>
                <div className="hidden lg:flex justify-between items-center border-b pb-2 mb-2">
                  <div className="w-1/6">Product</div>
                  <div className="w-1/6">Name</div>
                  <div className="w-1/6">Price</div>
                  <div className="w-1/6">Quantity</div>
                  <div className="w-1/6">Subtotal</div>
                  <div className="w-1/6">Actions</div>
                </div>
                {localCartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row justify-between items-center border-b pb-2 mb-2"
                  >
                    <div className="w-full lg:w-1/6 mb-2 lg:mb-0">
                      <img src={item.img} alt={item.name} className="w-full" />
                    </div>
                    <div className="w-full lg:w-1/6 mb-2 lg:mb-0">{item.name}</div>
                    <div className="w-full lg:w-1/6 mb-2 lg:mb-0">{item.price}</div>
                    <div className="w-full lg:w-1/6 mb-2 lg:mb-0 flex items-center justify-center lg:justify-start">
                      <button
                        onClick={() => handleQuantityChange(index, item.quantity - 1)}
                      >
                        <HiMiniMinusSmall
                          style={{ borderRadius: "20px" }}
                          className="text-xl cursor-pointer border-2 text-gray-600"
                        />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        className="w-12 mx-2 text-center"
                      />
                      <button
                        onClick={() => handleQuantityChange(index, item.quantity + 1)}
                      >
                        <HiMiniPlusSmall
                          style={{ borderRadius: "20px" }}
                          className="text-xl cursor-pointer border-2 text-gray-600"
                        />
                      </button>
                    </div>
                    <div className="w-full lg:w-1/6 mb-2 lg:mb-0">
                      ${parseFloat(item.price.replace("$", "")) * item.quantity}
                    </div>
                    <div className="w-full lg:w-1/6 mb-2 lg:mb-0 flex justify-center lg:justify-start">
                      <TiTimes
                        style={{ borderRadius: "20px" }}
                        className="text-xl cursor-pointer border-2 text-gray-600"
                        onClick={() => removeCartItem(item)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="flex mt-4 justify-between">
              <Link
                to="/Shop"
                className="text-sm bg-gray-300 px-4 py-2"
                style={{ borderRadius: "20px" }}
              >
                Return to Shop
              </Link>
              <button
                onClick={handleUpdateCart}
                className="text-sm bg-gray-300 ml-4 px-4 py-2"
                style={{ borderRadius: "20px" }}
              >
                Update Cart
              </button>
            </div>
            <div className="flex items-center justify-between my-4 px-1">
              <h2>Coupon Code</h2>
              <div
                className="flex border h-10 mt-4 md:mt-0 w-full md:w-auto"
                style={{ borderRadius: "20px" }}
              >
                <input
                  type="text"
                  placeholder="Enter Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="py-1 px-2 flex-grow rounded-l-full border-none outline-none"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-black py-2 px-4 text-white rounded-r-full"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 lg:ml-4 border-2 p-2 mt-4 lg:mt-0">
            <div className="mt-8">
              <div className="flex justify-between border-t pt-2 border-b pb-2 mb-2">
                <span>Cart Total</span>
                <span></span>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span>Discount:</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-green-600 text-white px-4 py-2 w-full rounded-[20px]"
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
