import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdDashboard, MdHistory } from "react-icons/md";
import { CiHeart, CiLogout, CiSettings, CiShoppingCart } from "react-icons/ci";
import SectionImg from "../../Components/SectionsImg";

const User_Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isCurrentPage = (path) => {
    return location.pathname === path ? "bg-gray-200" : "";
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl mb-4">You are not logged in!</h1>
        <Link
          to="/login"
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div>
        <SectionImg />
      </div>
      <div className="w-full lg:w-60 border rounded">
        <h2 className="font-bold text-2xl md:text-3xl mb-5 p-3">Navigation</h2>
        <ul className="flex flex-col gap-4 text-lg md:text-xl">
          <li className="flex items-center">
            <Link
              to="/user-dashboard/dashboard"
              className={`w-full flex items-center p-2 hover:bg-gray-200 rounded-md ${isCurrentPage(
                "/user-dashboard/dashboard"
              )}`}
            >
              <MdDashboard className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/user-dashboard/order-history"
              className={`w-full flex items-center p-2 hover:bg-gray-200 rounded-md ${isCurrentPage(
                "/user-dashboard/order-history"
              )}`}
            >
              <MdHistory className="mr-2" />
              Order History
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/user-dashboard/wishlist"
              className={`w-full flex items-center p-2 hover:bg-gray-200 rounded-md ${isCurrentPage(
                "/user-dashboard/wishlist"
              )}`}
            >
              <CiHeart className="mr-2" />
              Wishlist
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/user-dashboard/shopingcart"
              className={`w-full flex items-center p-2 hover:bg-gray-200 rounded-md ${isCurrentPage(
                "/user-dashboard/shopingcart"
              )}`}
            >
              <CiShoppingCart className="mr-2" />
              Shopping Cart
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/user-dashboard/settings"
              className={`w-full flex items-center p-2 hover:bg-gray-200 rounded-md ${isCurrentPage(
                "/user-dashboard/settings"
              )}`}
            >
              <CiSettings className="mr-2" />
              Settings
            </Link>
          </li>
          <li className="flex items-center">
            <button
              className="w-full flex items-center p-2 hover:bg-gray-200 rounded-md"
              onClick={handleLogout}
            >
              <CiLogout className="mr-2" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User_Dashboard;
