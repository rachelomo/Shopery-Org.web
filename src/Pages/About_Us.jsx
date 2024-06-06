import { useState } from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import UncoloredNavbar from "../Components/UncoloredNavbar";
import ShopVegetable from "./ShopVegetable";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiPackageLight } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaArrowLeft,
} from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import ClientCard from "./ClientCard";
import NomalTest from "./NomalTest";
import Subscribtion from "./Subscribtion";

const img = "Image (19).png";
const img1 = "Image (20).png";
const group = "Group (5).png";
const img2 = "stars 1.png";
const img3 = "Vector (1).png";
const img4 = "Image (21).png";
const img5 = "Image (23).png";
const img6 = "Image (24).png";
const img7 = "Image (25).png";
const img8 = "Image (26).png";

const teamMembers = [
  {
    img: img5,
    name: "Jenny Wilson",
    role: "Ceo & Founder",
  },
  {
    img: img6,
    name: "Jane Cooper",
    role: "Worker",
  },
  {
    img: img7,
    name: "Cody Fisher",
    role: "Security Guard",
  },
  {
    img: img8,
    name: "Robert Fox",
    role: "Senior Farmer Manager",
  },
];

const About_Us = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div>
        <UncoloredNavbar />
        <ShopVegetable />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-10">
        <div className="md:w-1/2">
          <h2 className="font-bold text-[25px] text-center md:text-left">
            100% Trusted <br /> Organic Food Store
          </h2>
          <span className="text-sm block md:inline">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </span>
        </div>
        <div className="md:w-1/2">
          <img src={img} alt="img" className="w-full md:w-80" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={img1} alt="img1" className="w-full md:w-80" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-lg font-bold text-center md:text-left">
            100% Trusted Organic Food Store
          </h2>
          <span className="text-sm block md:inline">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.{" "}
          </span>
          <div className="flex flex-col md:flex-row mt-4">
            <div className="flex flex-col">
              <div className="flex items-center">
                <img src={group} alt="group" className="w-5" />
                <div className="ml-2">
                  <h2 className="text-lg font-bold">100% Organic food</h2>
                  <span className=" text-sm text-gray-600">
                    100% healthy & Fresh food.
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <img src={img2} alt="img2" className="w-5" />
                <div className="ml-2">
                  <h2 className="text-lg font-bold">Customer Feedback</h2>
                  <span className=" text-sm text-gray-600">
                    Our happy customer
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <img src={img3} alt="img" className="w-5" />
                <div className="ml-2">
                  <h2 className="text-lg font-bold">Free Shipping</h2>
                  <span className=" text-sm text-gray-600">
                    Free shipping with discount
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
              <div className="flex items-center">
                <TfiHeadphoneAlt className="text-green-600" />
                <div className="ml-2">
                  <h2 className="text-lg font-bold">Great Support 24/7</h2>
                  <span className=" text-sm text-gray-600">
                    Instant access to Contact
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <IoBagCheckOutline className="text-green-600" />
                <div className="ml-2">
                  <h2 className="text-lg font-bold">100% Secure Payment</h2>
                  <span className=" text-sm text-gray-600">
                    We ensure your money is safe
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <PiPackageLight className="text-green-600 border" />
                <div className="ml-2">
                  <h2 className="text-lg font-bold">100% Organic Food</h2>
                  <span className=" text-sm text-gray-600">
                    100% healthy & Fresh food.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third imgs */}
      <div className="flex flex-col md:flex-row px-4 md:px-80">
        <div className="md:w-1/2">
          <div className="my-10 text-center md:text-left">
            <h2 className="text-[30px] font-bold">
              We Delivered, You <br /> Enjoy Your Order.
            </h2>
            <span className="text-sm block md:inline">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </span>
            <div className="my-5">
              <div className="flex items-center">
                <CiCircleCheck />
                <span className="ml-2">Sed in metus pellentesque.</span>
              </div>
              <div className="flex items-center mt-2">
                <CiCircleCheck />
                <span className="ml-2">
                  Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                </span>
              </div>
              <div className="flex items-center mt-2">
                <CiCircleCheck />
                <span className="ml-2">
                  Maecenas ut nunc fringilla erat varius.
                </span>
              </div>
            </div>
          </div>
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full mt-4">
            Shop now <HiOutlineArrowSmallRight className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={img4} alt="img4" className="w-full md:w-80" />
        </div>
      </div>
      {/* Awesome image */}
      <div className="text-center">
        <h2 className="font-bold text-[30px] text-center">Our Awesome Team</h2>
        <span className="text-sm">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus <br /> neque. Duis non diam eget est luctus tincidunt
          a a mi.
        </span>
        <div className="relative mt-8 flex justify-center items-center">
          <FaArrowLeft
            className="cursor-pointer text-2xl mx-4"
            onClick={handlePrev}
          />
          <div className="flex gap-4 justify-center my-8">
            {teamMembers
              .slice(currentIndex, currentIndex + 4)
              .map((member, index) => (
                <div key={index} className="relative">
                  <img src={member.img} alt={member.name} className="w-40" />
                  {index === 0 && (
                    <div className="flex items-center gap-3 absolute top-[10vh] left-0 right-0 justify-center px-5">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-[20px]"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-[20px]"
                      >
                        <FaTwitter className="rounded-full bg-green-600 p-1" />
                      </a>
                      <a
                        href="https://www.pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-[20px]"
                      >
                        <SlSocialPintarest />
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-[20px]"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  )}
                  <div className="text-start mt-2">
                    <h2 className="font-bold">{member.name}</h2>
                    <span className="text-[13px]">{member.role}</span>
                  </div>
                </div>
              ))}
          </div>
          <FaArrowRight
            className="cursor-pointer text-2xl mx-4"
            onClick={handleNext}
          />
        </div>
      </div>
      {/* ClientCard */}
      <div>
        <ClientCard />
        <NomalTest />
        <Subscribtion />
      </div>
    </div>
  );
};

export default About_Us;
