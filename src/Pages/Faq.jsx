import { useState } from "react";
import UncoloredNavbar from "../Components/UncoloredNavbar";
import { IoIosArrowForward } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa";
import Subscribtion from "./Subscribtion";
import { Link } from "react-router-dom";

const img = "Breadcrumbs.png";
const img6 = "Image (20).png";

const Faq = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      title: "In elementum est a ante sodales iaculis.",
      showBellow: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ut iste
      sapiente maxime commodi, cupiditate veniam dicta asperiores labore aut
      pariatur ratione sit mollitia. Aspernatur tempora enim minus similique
      odio.`,
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ut iste
      sapiente maxime commodi, cupiditate veniam dicta asperiores labore aut
      pariatur ratione sit mollitia. Aspernatur tempora enim minus similique
      odio.`,
    },
    {
      title: "Etiam lobortis massa eu nibh tempor elementum.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              quis risus nec turpis facilisis cursus. Curabitur a felis nec
              magna malesuada gravida.`,
    },
    {
      title: "in elementum est a ante sodales iaculis.",
      content: `Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.`,
    },
    {
      title: "Aenean quis quam nec lacus semper dignissim.",
      content: `Nulla tincidunt eros id tempus accumsan. Suspendisse potenti.
              Sed euismod, nisl a interdum lacinia, justo risus auctor nisi.`,
    },
    {
      title: "Nulla tincidunt eros id tempus accumsan.",
      content: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Etiam lacinia suscipit eros, nec
              dignissim quam laoreet in.`,
    },
  ];

  return (
    <div>
      <UncoloredNavbar />
      <div className="relative">
        <img src={img} alt="Breadcrumbs" className="w-full" />
        <div className="absolute text-white inset-0 flex items-center px-4 md:px-[7.5vw] gap-2">
          <Link to="/">
            {" "}
            <CiHome className="text-xl md:text-2xl" />
          </Link>{" "}
          <IoIosArrowForward />
          <h2 className="text-green-600 text-xl md:text-2xl">Faqs</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 md:px-20 gap-10 md:gap-40 my-10 md:my-40">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Welcome, Let’s Talk <br /> About Our Ecobazar
          </h2>
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <span
                  className={`text-lg md:text-xl ${
                    section.title === "In elementum est a ante sodales iaculis."
                      ? "text-green-600 font-bold"
                      : "font-bold"
                  }`}
                >
                  {section.title}
                </span>
                {expandedSections[index] ? (
                  <FaMinus className="text-black" />
                ) : (
                  <FaPlus className="text-black" />
                )}
              </div>
              {expandedSections[index] && (
                <span className="block mt-2">{section.content}</span>
              )}
              <div className="my-5">
                <span>{section.showBellow}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={img6}
            alt="Faq Image"
            className="w-full h-auto md:w-[90vw] object-cover"
          />
        </div>
      </div>
      <div>
        <Subscribtion />
      </div>
    </div>
  );
};

export default Faq;
