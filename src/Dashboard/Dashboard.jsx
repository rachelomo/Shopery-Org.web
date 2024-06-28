import { Route, Routes } from "react-router-dom";
import User_Dashboard from "./User_Dashboard";
import TheDashboard from "./TheDashboard";
import OrderHistory from "./OrderHistory";
import WhishList from "./WhishList";
import Settings from "./Settings";
import ShopingCart from "./ShopingCart";
import DashboardImg from "./DashboardImg";
import UncoloredNavbar from "../Components/UncoloredNavbar";

const Dashboard = ({ cartItems, updateCartItem, removeCartItem }) => {
  return (
    <div className="min-h-screen">
      <div>
        <UncoloredNavbar />
      </div>
      <div>
        <DashboardImg />
      </div>
      <div className="flex">
        <div className="w-full lg:w-1/4">
          <User_Dashboard />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="dashboard" element={<TheDashboard />} />
            <Route path="order-history" element={<OrderHistory />} />
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
            <Route
              path="wishlist"
              element={
                <WhishList
                  cartItems={cartItems}
                  updateCartItem={updateCartItem}
                  removeCartItem={removeCartItem}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
