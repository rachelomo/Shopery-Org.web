import { useState, useEffect } from "react";
import axios from "axios";

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/orders?userId=${userId}`
        );
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h2>Order History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <div>Order ID: {order.id}</div>
              <div>Date: {order.date}</div>
              <div>
                <h3>Items:</h3>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} - Quantity: {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
