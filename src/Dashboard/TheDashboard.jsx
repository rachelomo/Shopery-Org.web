import { Link } from "react-router-dom";
const img = "/Ellipse 5.png";
import OrderHistory from "./OrderHistory";
import CustomerProfile from "./CustormerProfilr";
import CustomerAddress from "./CustomerAddress";

const TheDashboard = () => {
  return (
    <div className="p-4">
      {/* Profile and Billing Address Section */}
      <div>
        <div>
          <CustomerProfile />
        </div>
        <div>
          <CustomerAddress />
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="border text-center w-full lg:w-1/2 flex items-center justify-center rounded h-auto lg:h-60">
          <div>
            <img
              src={img}
              alt="Profile"
              className="rounded-full w-24 h-24 mx-auto"
            />
            <div className="mt-4">
              <h2 className="text-xl font-bold">Dianne Russell</h2>
              <p className="text-gray-600">Customer</p>
              <Link to="/" className="text-green-600">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 border rounded p-5 w-full lg:w-1/2 h-auto lg:h-60">
          <span className="block text-lg font-bold">Billing Address</span>
          <h2 className="text-xl">Dianne Russell</h2>
          <span className="text-sm block">
            4140 Parker Rd. Allentown, New Mexico 31134
          </span>
          <h2 className="text-lg">dianne.russell@gmail.com</h2>
          <span className="block">(671) 555-0110</span>
          <Link to="/" className="text-green-600">
            Edit Address
          </Link>
        </div>
      </div> */}

      {/* Recent Order History Section */}
      <div>
        <OrderHistory />
      </div>
    </div>
  );
};

export default TheDashboard;
