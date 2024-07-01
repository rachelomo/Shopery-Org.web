import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import UncoloredNavbar from "./UncoloredNavbar";
import AccForgotPassword from "./AccForgotPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [resetLinkSent, setResetLinkSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/forgot-password", { email });
      if (response.status === 200) {
        toast.success("Password reset link sent to your email");
        setResetLinkSent(true);
      } else {
        toast.error("Failed to send password reset link");
      }
    } catch (error) {
      console.error("Error requesting password reset:", error);
      toast.error("Error requesting password reset");
    }
  };

  return (
    <div>
      <UncoloredNavbar />
      <div>
        <AccForgotPassword />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-md w-full space-y-8">
          <div className="flex justify-center">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Forgot Password
            </h2>
          </div>
          <form className="mt-8 space-y-6 px-5" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              {resetLinkSent ? (
                <Link
                  to="/reset_password"
                  style={{ borderRadius: "20px" }}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                >
                  Reset Password
                </Link>
              ) : (
                <button
                  type="submit"
                  style={{ borderRadius: "20px" }}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                >
                  Send Reset Link
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
