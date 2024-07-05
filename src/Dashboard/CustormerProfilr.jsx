import { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerProfile = () => {
  const [profile, setProfile] = useState({ name: '', image: '' });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', profile.name);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/update-profile', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setProfile(response.data);
      if (imageFile) {
        setProfile((prevProfile) => ({
          ...prevProfile,
          image: URL.createObjectURL(imageFile),
        }));
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const profileImageUrl = profile.image ? `/storage/${profile.image}` : 'default-profile.png';

  return (
    <div>
      <form onSubmit={handleProfileUpdate} className="flex flex-wrap justify-between">
        <div className="flex flex-col items-center">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full mb-2"
          />
          <div>{profile.name}</div>
          <button type="submit" className="text-green-600 mx-[10vw]">Edit Profile</button>
        </div>
      </form>
    </div>
  );
};

export default CustomerProfile;
