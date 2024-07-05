import { useState, useEffect } from "react";
import axios from "axios";

const CustomerAddress = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get("/api/address", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setAddress(response.data))
      .catch((error) => setError(error));
  }, []);

  const handleAddressUpdate = (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    axios
      .post("/api/update-address", address, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setAddress(response.data))
      .catch((error) => setError(error));
  };

  return (
    <div className="">
      <h1 className="text:gray-400">BILLING ADDRESS</h1>
      {error && <div className="text-red-500">{error.message}</div>}
      <form onSubmit={handleAddressUpdate}>
        <div className="">
          <label>Street:</label>
          <input
            type="text"
            value={address.street || ""}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={address.city || ""}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={address.state || ""}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
          />
        </div>
        <div>
          <label>Zip:</label>
          <input
            type="text"
            value={address.zip || ""}
            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
          />
        </div>
        <button type="submit" className="text-green-600 mx-[10vw]">Edit Address</button>
      </form>
    </div>
  );
};

export default CustomerAddress;
