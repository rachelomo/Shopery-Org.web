import { useState } from 'react';
import axios from 'axios';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/change-password', {
        currentPassword,
        newPassword,
        confirmPassword,
      });
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <div className="my-5 border p-5 w-full">
      <h2 className="text-xl font-bold mb-4">Change Password</h2>
      <div className="mb-4 relative">
        <label htmlFor="currentPassword" className="block mb-1">Current Password</label>
        <input
          type={showCurrentPassword ? 'text' : 'password'}
          id="currentPassword"
          name="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
        />
        <div 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
        >
          {showCurrentPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </div>
      </div>
      <div className="mb-4 relative">
        <label htmlFor="newPassword" className="block mb-1">New Password</label>
        <input
          type={showNewPassword ? 'text' : 'password'}
          id="newPassword"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
        />
        <div 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowNewPassword(!showNewPassword)}
        >
          {showNewPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </div>
      </div>
      <div className="mb-4 relative">
        <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-green-600"
        />
        <div 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </div>
      </div>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded-[20vw] hover:bg-green-700 focus:outline-none focus:bg-green-700"
        onClick={handlePasswordChange}
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePassword;
