import { useState } from "react";
import { CiHome, CiLocationOn, CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa"; 
import UncoloredNavbar from "../Components/UncoloredNavbar";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import Subscribtion from "./Subscribtion";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const img = "Breadcrumbs.png";
const MAPBOX_TOKEN = "YOUR_MAPBOX_ACCESS_TOKEN";

const Contact_Us = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/meoqkjpw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };


  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10,
    width: "100%",
    height: "400px",
  });

  return (
    <div>
      <UncoloredNavbar />
      <div>
        <div className="relative">
          <img src={img} alt="img" />
          <div className="absolute text-white inset-0 flex items-center px-[7.5vw] gap-2">
          <Link to="/">
              <CiHome className="" />
            </Link>
            <IoIosArrowForward />
            <h2 className="text-green-600">Contact</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center px-4 lg:px-[4vw] mb-5 justify-center">
        <div className="text-center shadow-lg shadow-gray-200 flex flex-col w-full lg:w-60 h-auto lg:h-auto gap-6 px-5 py-5 lg:px-10 justify-center bg-white rounded-lg">
          <div className="flex flex-col items-center">
            <CiLocationOn className="text-green-600 text-3xl mb-2" />
            <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
          </div>
          <hr className="border-gray-200 w-full" />
          <div className="flex flex-col items-center">
            <CiMail className="text-green-600 text-3xl mb-2" />
            <span>Proxy@gmail.com</span>
            <span>Help.proxy@gmail.com</span>
          </div>
          <hr className="border-gray-200 w-full" />
          <div className="flex flex-col items-center">
            <MdOutlinePhoneInTalk className="text-green-600 text-3xl mb-2" />
            <span>(219) 555-0114</span>
            <span>(164) 333-0487</span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 shadow-lg shadow-gray-200 px-2 my-3 py-5">
          <div className="px-5">
            <h2 className="font-bold text-lg">Just Say Hello!</h2>
            <span className="text-sm">
              Do you fancy saying hi to me or you want to get started with your{" "}
              <br /> project and you need my help? Feel free to contact me.
            </span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5 mt-5">
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="border p-2 rounded w-full"
          onChange={handleChange}
          value={formData.subject}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border p-2 rounded h-32 w-full"
          onChange={handleChange}
          value={formData.message}
        />
        <button
          type="submit"
          className="bg-green-600 text-white w-40 p-2 rounded-full "
        >
          Send Message
        </button>
      </form>
        </div>
      </div>

      <div className="w-full h-[300px] bg-gray-200 border rounded-lg px-4 lg:px-20 my-20">
        <Map
          {...viewport}
          mapboxAccessToken={MAPBOX_TOKEN}
          onMove={(evt) => setViewport(evt.viewState)}
          className="w-full h-full"
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker latitude={37.7749} longitude={-122.4194}>
            <FaMapMarkerAlt size={30} color="red" />
          </Marker>
        </Map>
      </div>
{/* 
      <Subscribtion /> */}
    </div>
  );
};

export default Contact_Us;
