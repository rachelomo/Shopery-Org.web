import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard, MdHistory } from "react-icons/md";
import { CiHeart, CiLogout, CiSettings, CiShoppingCart } from "react-icons/ci";
import OrderHistory from "../Components/OrderHistory";

const User_Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  return (
    <div>
      {user ? (
        <div>
          {/* Dashboard MAIN */}
          <div>
            {/* First page Nav */}
            <div className="border bg-gray-300">
              <h2>Navigation</h2>
              <ul className="">
                <li className="flex items-center">
                  <Link to="" className="flex items-center">
                    {" "}
                    <MdDashboard />
                    Dashboard
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link to="" className="flex items-center">
                    {" "}
                    <MdHistory />
                    Order History
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link to="" className="flex items-center">
                    <CiHeart />
                    Wishlist
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link to="" className="flex items-center">
                    {" "}
                    <CiShoppingCart />
                    Shopping Cart
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link to="" className="flex items-center">
                    {" "}
                    <CiSettings />
                    Settings
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link to="" className="flex items-center">
                    {" "}
                    <CiLogout />
                    <button onClick={logout}>Logout</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Welcome, {profile.name}</h1>
            <h2>Email: {profile.email}</h2>
            <h2>Address: {profile.address}</h2>
            <div>
              <button>Edit Profile</button>
              <button>Edit Address</button>
            </div>
          </div>
          {/* Orders */}
          <OrderHistory userId={user.id} />
        </div>
      ) : (
        <div>
          <h1>You are not logged in!</h1>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </div>
  );
};

export default User_Dashboard;
