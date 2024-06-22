import { Link } from "react-router-dom";
const img = "Ellipse 5.png";

const TheDashboard = () => {
  return (
    <div className="p-4">
      {/* Profile and Billing Address Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-6">
        <div className="border text-center w-full lg:w-1/2 flex items-center justify-center rounded h-auto lg:h-60 p-4">
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
      </div>

      {/* Recent Order History Section */}
      <div className="my-10 border p-5 overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Order History</h2>
          <Link to="/all" className="text-green-600">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Order ID</th>
                <th className="p-2">Date</th>
                <th className="p-2">Total</th>
                <th className="p-2">Status</th>
                {/* <th className="p-2">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "#703",
                  date: "8 Sep, 2020",
                  total: "$135.00 (5 Products)",
                  status: "Processing",
                },
                {
                  id: "#703",
                  date: "24 May, 2020",
                  total: "$25.00 (1 Product)",
                  status: "On the way",
                },
                {
                  id: "#130",
                  date: "22 Oct, 2020",
                  total: "$250.00 (4 Products)",
                  status: "Completed",
                },
                {
                  id: "#561",
                  date: "1 Feb, 2020",
                  total: "$35.00 (1 Product)",
                  status: "Completed",
                },
                {
                  id: "#536",
                  date: "21 Sep, 2020",
                  total: "$578.00 (13 Products)",
                  status: "Completed",
                },
                {
                  id: "#492",
                  date: "22 Oct, 2020",
                  total: "$345.00 (7 Products)",
                  status: "Completed",
                },
              ].map((order, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.date}</td>
                  <td className="p-2">{order.total}</td>
                  <td className="p-2">{order.status}</td>
                  <td className="p-2">
                    <Link
                      to={`/order-details/${order.id}`}
                      className="text-green-600"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TheDashboard;
