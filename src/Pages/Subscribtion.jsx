import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";

const Subscribtion = () => {
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
          className="py-1 px-2 flex-grow rounded-l-full border-none outline-none"
        />
        <button className="bg-green-600 py-2 px-4 text-white rounded-r-full">
          Subscribe
        </button>
      </div>
      <div className="flex gap-5 mt-4 md:mt-0">
        <FaFacebook className="text-green-600 text-[20px]" />
        <FaTwitter className="text-black text-[20px]" />
        <SlSocialPintarest className="text-black text-[20px]" />
        <FaInstagram className="text-black text-[20px]" />
      </div>
    </div>
  );
};

export default Subscribtion;
