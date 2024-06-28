import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerAddress = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    axios
      .get("/api/address", {
        headers: { Authorization: `Bearer YOUR_TOKEN_HERE` },
      })
      .then((response) => setAddress(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddressUpdate = (event) => {
    event.preventDefault();

    axios
      .post("/api/update-address", address, {
        headers: { Authorization: `Bearer YOUR_TOKEN_HERE` },
      })
      .then((response) => setAddress(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Address</h1>
      <form onSubmit={handleAddressUpdate}>
        <div>
          <label>Street:</label>
          <input
            type="text"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
          />
        </div>
        <div>
          <label>Zip:</label>
          <input
            type="text"
            value={address.zip}
            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
          />
        </div>
        <button type="submit">Update Address</button>
      </form>
    </div>
  );
};

export default CustomerAddress;
