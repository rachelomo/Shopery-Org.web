import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import { Link } from "react-router-dom";

const Subscribtion = () => {
  const [email, setEmail] = useState("");

  // Basic email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Mocking a subscription process; you would replace this with an API call.
    alert(`Thank you for subscribing with: ${email}`);

    // Clear the input after submission
    setEmail("");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-[10vw] px-4 md:px-20 py-10">
      <div className="text-center md:text-left">
        <h2 className="font-bold text-[20px]">Subscribe to our Newsletter</h2>
        <span className="text-[13px] text-gray-400 block mt-2">
          Pellentesque eu nibh eget mauris congue mattis mattis nec{" "}
          <br className="hidden md:block" />
          tellus. Phasellus imperdiet elit eu magna.
        </span>
      </div>
      <div
        className="flex border h-10 mt-4 md:mt-0 w-full md:w-auto"
        style={{ borderRadius: "20px" }}
      >
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-1 px-2 flex-grow rounded-l-full border-none outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="bg-green-600 py-2 px-4 text-white rounded-r-full"
        >
          Subscribe
        </button>
      </div>
      <div className="flex gap-5 mt-4 md:mt-0">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="text-green-600 text-[20px]" />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-black text-[20px]" />
  </a>
  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
    <SlSocialPintarest className="text-black text-[20px]" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-black text-[20px]" />
  </a>
</div>

    </div>
  );
};

export default Subscribtion;
