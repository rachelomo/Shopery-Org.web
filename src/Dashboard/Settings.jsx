import { useState } from "react";
import ChangePassword from "./ChangePassword";

const Settings = () => {
  const [user, setUser] = useState({
    firstName: "Dianne",
    lastName: "Russell",
    email: "dianne.russell@gmail.com",
    phoneNumber: "(603) 555-0123",
    companyName: "Zakirsoft",
    streetAdress: "4140 Par|",
    profileImage: "/Ellipse 5.png",
    // country: "United States",
    // state: "Washington DC",
    zipCode: "20033",
  });

  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    companyName: user.companyName,
    streetAdress: user.streetAdress,
    // country: user.country,
    // state: user.state,
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

  const saveChanges = () => {
    // API implement
    const userData = new FormData();
    userData.append("firstName", formData.firstName);
    userData.append("lastName", formData.lastName);
    userData.append("email", formData.email);
    userData.append("phoneNumber", formData.phoneNumber);
    if (imageFile) {
      userData.append("profileImage", imageFile);
    }

    // fetch('api/endpoint', {
    //   method: 'POST',
    //   body: userData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Response from server:', data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
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
    console.log("Changes saved:", formData);
  };

  return (
    <div className="p-4 my-4">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="flex justify-between gap-4">
        <div className="w-[40vw]">
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
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-[20vw] hover:bg-green-700 focus:outline-none focus:bg-green-700"
            onClick={saveChanges}
          >
            Save Changes
          </button>
        </div>
        <div className="flex flex-col items-center my-20">
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
      {/* //second */}
      <div className="my-5 border p-5 w-[50vw] ">
        <div>
          <h2>Billing Address</h2>
          <div className="">
            <div className="flex items-center gap-10">
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
                <label htmlFor="lastName" className="block mb-1">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
                />
              </div>
            </div>
            {/* address */}
            <div>
              <div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.streetAdress}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-10">
                  {" "}
                  <div className="mb-4 ">
                    <h1>Country / Region</h1>
                    <select
                      name="country"
                      id="country"
                      className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600 cursor-pointer"
                    >
                      <option value="country">United States</option>
                      <option value="country">United States</option>
                      <option value="country">United States</option>
                      <option value="country">United States</option>
                      <option value="country">United States</option>
                      <option value="country">United States</option>
                      <option value="country">United States</option>
                      <option value="country">United States</option>
                      <option value="country">United States</option>
                      <option value="country">United States</option>
                    </select>
                  </div>{" "}
                  <div className="mb-4">
                    <h2>States</h2>
                    <select
                      name="sates"
                      id="sates"
                      className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600 cursor-pointer"
                    >
                      <option value="states">United States</option>
                      <option value="states">United States</option>
                      <option value="states">United States</option>
                      <option value="states">United States</option>
                      <option value="states">United States</option>
                      <option value="states">United States</option>
                      <option value="states">United States</option>
                      <option value="states">United States</option>
                      <option value="states">United States</option>
                      <option value="states">United States</option>
                    </select>
                  </div>{" "}
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">
                      Zip Code
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
                </div>
                <div className="flex items-center justify-between">
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
                </div>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-[20vw] hover:bg-green-700 focus:outline-none focus:bg-green-700"
                  onClick={saveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third */}
      <div>
        <div className="border p-6 w-[50vw]">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Settings;
