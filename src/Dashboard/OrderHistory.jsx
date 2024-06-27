import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import axios from "axios";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const ordersPerPage = 5;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const fetchedOrders = response.data;
        setOrders(fetchedOrders);
        setTotalPages(Math.ceil(fetchedOrders.length / ordersPerPage));
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-2 py-1 ${
            currentPage === i ? "bg-green-600 text-white rounded-[20vw]" : ""
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <div className="p-4">
      <div className="my-10 border p-5 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Order History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse ">
            <thead className="bg-gray-200">
              <tr className="">
                <th className="p-2">Order ID</th>
                <th className="p-2">Date</th>
                <th className="p-2">Total</th>
                <th className="p-2">Status</th>
                {/* <th className="p-2">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order, index) => (
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
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={handlePrevious}
            className={`px-2 py-1 text-gray-600 ${
              currentPage !== 1
                ? "bg-gray-300 rounded-[20vw] border "
                : "opacity-50 rounded-[20vw] border "
            }`}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
          </button>
          {renderPageNumbers()}
          <button
            onClick={handleNext}
            className={`px-2 py-1 text-gray-600 ${
              currentPage !== totalPages
                ? "bg-gray-200 rounded-[20vw] border "
                : "opacity-50"
            }`}
            disabled={currentPage === totalPages}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
