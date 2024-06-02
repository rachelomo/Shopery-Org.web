import { FaInstagram } from "react-icons/fa";

const img = "Instagram Post.png";
const img1 = "Instagram Post (1).png";
const img2 = "Instagram Post (2).png";
const img3 = "Instagram Post (3).png";
const img4 = "Instagram Post (4).png";
const img5 = "Instagram Post (5).png";

const FollowIg = () => {
  return (
    <div className="mb-20 mt-5">
      <div className="flex justify-center py-8 font-bold text-xl md:text-[30px]">
        <h2>Follow us on Instagram</h2>
      </div>
      <div className="flex flex-wrap justify-between px-20">
        <div className="relative">
          <img src={img} alt="img" className="w-24 md:w-[13vw]" />
        </div>
        <div className="relative">
          <img src={img1} alt="img1" className="w-24 md:w-[13vw]" />
          <div className="absolute inset-0 flex items-center justify-center text-2xl text-white">
            <FaInstagram />
          </div>
        </div>
        <div className="relative">
          <img src={img2} alt="img2" className="w-24 md:w-[13vw]" />
        </div>
        <div className="relative">
          <img src={img3} alt="img3" className="w-24 md:w-[13vw]" />
        </div>
        <div className="relative">
          <img src={img4} alt="img4" className="w-24 md:w-[13vw]" />
        </div>
        <div className="relative">
          <img src={img5} alt="img5" className="w-24 md:w-[13vw]" />
        </div>
      </div>
    </div>
  );
};

export default FollowIg;
