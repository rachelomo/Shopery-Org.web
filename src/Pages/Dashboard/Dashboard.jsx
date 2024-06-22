import { Route, Routes } from "react-router-dom";
import User_Dashboard from "./User_Dashboard";
import TheDashboard from "./TheDashboard";
import OrderHistory from "./OrderHistory";
import WhishList from "./WhishList";
import Settings from "./Settings";
import ShopingCart from "./ShopingCart";
// import UncoloredNavbar from "../Components/UncoloredNavbar";
// import Subscribtion from "../Pages/Subscribtion";

const Dashboard = ({ cartItems, updateCartItem, removeCartItem }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <UncoloredNavbar /> */}
      <div className="flex flex-col lg:flex-row mx-[7.8vw]">
        <User_Dashboard />
        <div className="flex-1 my-10 mx-5 md:mx-10 lg:mx-20 overflow-x-hidden">
          <Routes>
            <Route path="dashboard" element={<TheDashboard />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="wishlist" element={<WhishList />} />
            <Route path="settings" element={<Settings />} />
            <Route
              path="shopingcart"
              element={
                <ShopingCart
                  cartItems={cartItems}
                  updateCartItem={updateCartItem}
                  removeCartItem={removeCartItem}
                />
              }
            />
          </Routes>
        </div>
      </div>
      {/* <div>
        <Subscribtion />
      </div> */}
    </div>
  );
};

export default Dashboard;
