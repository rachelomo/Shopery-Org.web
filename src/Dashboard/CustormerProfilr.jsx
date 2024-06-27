import { useState, useEffect } from "react";
import axios from "axios";

const CustomerProfile = () => {
  const [profile, setProfile] = useState({ name: "", image: "" });
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
      .get("/api/user", {
        headers: {
          Authorization: `Bearer 98|uAsaPjb5A51z6LJPwfOZuQSNO61A1yS1uqB7Lp2V3c15eb98`,
        },
      })
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", profile.name);
    if (image) {
      formData.append("image", image);
    }

    axios
      .post("/api/update-profile", formData, {
        headers: {
          Authorization: `Bearer 98|uAsaPjb5A51z6LJPwfOZuQSNO61A1yS1uqB7Lp2V3c15eb98`,
        },
      })
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  };

  const profileImageUrl = profile.image
    ? `/storage/${profile.image}`
    : "default-profile.png"; // Use a default image if none is provided

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleProfileUpdate}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      {profile.image && <img src={profileImageUrl} alt="Profile" />}
    </div>
  );
};

export default CustomerProfile;
