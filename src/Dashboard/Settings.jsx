import { useState } from 'react';
import axios from 'axios';
import ChangePassword from './ChangePassword';

const Settings = () => {
  const [user, setUser] = useState({
    firstName: 'Dianne',
    lastName: 'Russell',
    email: 'dianne.russell@gmail.com',
    phoneNumber: '(603) 555-0123',
    companyName: 'Zakirsoft',
    streetAdress: '4140 Par|',
    profileImage: '/Ellipse 5.png',
    zipCode: '20033',
  });

  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    companyName: user.companyName,
    streetAdress: user.streetAdress,
    zipCode: user.zipCode,
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const saveChanges = async () => {
    const userData = new FormData();
    userData.append('firstName', formData.firstName);
    userData.append('lastName', formData.lastName);
    userData.append('email', formData.email);
    userData.append('phoneNumber', formData.phoneNumber);
    userData.append('companyName', formData.companyName);
    userData.append('streetAdress', formData.streetAdress);
    userData.append('zipCode', formData.zipCode);
    if (imageFile) {
      userData.append('profileImage', imageFile);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/update-settings', userData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response from server:', response.data);
      setUser({
        ...user,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        profileImage: imageFile
          ? URL.createObjectURL(imageFile)
          : user.profileImage,
      });
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <div className="p-4 my-4">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-1">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block mb-1">
              Company Name (optional)
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="streetAdress" className="block mb-1">
              Street Address
            </label>
            <input
              type="text"
              id="streetAdress"
              name="streetAdress"
              value={formData.streetAdress}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zipCode" className="block mb-1">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
            />
          </div>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-[20vw] hover:bg-green-700 focus:outline-none focus:bg-green-700"
            onClick={saveChanges}
          >
            Save Changes
          </button>
        </div>
        {/* second */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full mb-2"
          />
          <div className="relative">
            <label
              htmlFor="profileImage"
              className="block mb-1 cursor-pointer text-green-600 rounded-[20vw] border border-green-600 py-1"
            >
              Change Image
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <p className="text-gray-600 text-sm">Max file size: 5MB</p>
          </div>
        </div>
      </div>
      <div className="my-5 border p-5 w-full">
        <h2>Billing Address</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-4">
              <label htmlFor="companyName" className="block mb-1">
                Company Name (optional)
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="streetAdress" className="block mb-1">
                Street Address
              </label>
              <input
                type="text"
                id="streetAdress"
                name="streetAdress"
                value={formData.streetAdress}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="zipCode" className="block mb-1">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
              />
            </div>
          </div>
        </div>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-[20vw] hover:bg-green-700 focus:outline-none focus:bg-green-700"
          onClick={saveChanges}
        >
          Save Changes
        </button>
      </div>
      <ChangePassword />
    </div>
  );
};

export default Settings;
