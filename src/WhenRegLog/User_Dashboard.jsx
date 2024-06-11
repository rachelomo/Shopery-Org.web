import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard, MdHistory } from "react-icons/md";
import {
  CiHeart,
  CiHome,
  CiLogout,
  CiSettings,
  CiShoppingCart,
} from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const img = "Breadcrumbs.png";

const User_Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="user-dashboard">
      <div className="relative">
        <img src={img} alt="Breadcrumbs" className="w-full" />
        <div className="absolute text-white inset-0 flex items-center px-[7.5vw] gap-2">
          <Link to="/">
            <CiHome className="text-2xl" />
          </Link>
          <h2 className="text-lg">Account</h2>
          <IoIosArrowForward />
          <h2 className="text-lg text-green-600">Dashboard</h2>
        </div>
      </div>
      {user ? (
        <div className="flex flex-col lg:flex-row gap-10 mx-[8vw] my-20">
          {/* Dashboard MAIN */}
          <div className="w-60">
            {/* First page Nav */}
            <div className="border bg-gray-300 rounded-md">
              <h2 className="font-bold text-3xl mb-5">Navigation</h2>
              <ul className="flex flex-col gap-4 text-xl">
                <li className="flex items-center">
                  <Link
                    to="/user-dashboard/theDashboard"
                    className="w-full flex items-center p-2 bg-gray-500 text-white rounded-md"
                  >
                    <MdDashboard className="mr-2" />
                    Dashboard
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    to="/user-dashboard/order-history"
                    className="w-full flex items-center p-2 hover:bg-gray-200 rounded-md"
                  >
                    <MdHistory className="mr-2" />
                    Order History
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    to="/user-dashboard/wishlist"
                    className="w-full flex items-center p-2 hover:bg-gray-200 rounded-md"
                  >
                    <CiHeart className="mr-2" />
                    Wishlist
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    to="/user-dashboard/cart"
                    className="w-full flex items-center p-2 hover:bg-gray-200 rounded-md"
                  >
                    <CiShoppingCart className="mr-2" />
                    Shopping Cart
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    to="/user-dashboard/settings"
                    className="w-full flex items-center p-2 hover:bg-gray-200 rounded-md"
                  >
                    <CiSettings className="mr-2" />
                    Settings
                  </Link>
                </li>
                <li className="flex items-center">
                  <button
                    onClick={logout}
                    className="w-full flex items-center p-2 text-red-600 hover:bg-gray-200 rounded-md"
                  >
                    <CiLogout className="mr-2" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="w-full lg:w-3/4"> */}
          {/* Add your main content for the dashboard here */}
          {/* <div className="p-5 border bg-white rounded-md shadow">
              <h2 className="text-2xl font-bold">Welcome, {user.name}</h2> */}
          {/* Add more dashboard content here */}
          {/* </div>
          </div> */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl mb-4">You are not logged in!</h1>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default User_Dashboard;
