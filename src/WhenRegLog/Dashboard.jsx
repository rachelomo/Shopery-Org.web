import { Route, Routes } from "react-router-dom";
import User_Dashboard from "./User_Dashboard";
import TheDashboard from "./TheDashboard";
import OrderHistory from "./OrderHistory";
import WhishList from "./WhishList";
import Settings from "./Settings";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <User_Dashboard />
      </div>
      <div className="flex-1">
        <Routes>
          <Route path="theDashboard" element={<TheDashboard />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="/wishlist" element={<WhishList />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
