import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const img = "Vector.png";
const img1 = "Image (16).png";
const imgry = "Rating.png";
const img2 = "Image (17).png";
const img3 = "Image (18).png";

const ClientCard = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="p-4 bg-white mt-5 px-[5vw]">
      <div className="flex justify-between px-4 md:px-5">
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Client Testimonials
          </h2>
        </div>
        <div className="flex items-center mb-4">
          <button
            className={`p-2 mx-2 ${
              page === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-500"
            }`}
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page === 1}
          >
            <FaArrowLeft />
          </button>
          <button
            className={`p-2 mx-2 bg-green-500 ${
              page === 2 ? "text-gray-400 cursor-not-allowed" : "text-blue-500"
            }`}
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={page === 2}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-4">
        {page === 1 ? (
          <>
            <TestimonialCard
              img={img}
              text="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
              imgUser={img1}
              userName="Robert Fox"
              userRole="Customer"
            />
            <TestimonialCard
              img={img}
              text="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
              imgUser={img2}
              userName="Robert Fox"
              userRole="Customer"
            />
            <TestimonialCard
              img={img}
              text="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
              imgUser={img3}
              userName="Robert Fox"
              userRole="Customer"
            />
          </>
        ) : (
          <>
            <TestimonialCard
              img={img}
              text="Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele."
              imgUser={img1}
              userName="Jenny Wilson"
              userRole="Customer"
            />
            <TestimonialCard
              img={img}
              text="Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele."
              imgUser={img1}
              userName="Guy Hawkins"
              userRole="Customer"
            />
            <TestimonialCard
              img={img}
              text="Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele."
              imgUser={img1}
              userName="Kathryn Murphy"
              userRole="Customer"
            />
          </>
        )}
      </div>
    </div>
  );
};

const TestimonialCard = ({ img, text, imgUser, userName, userRole }) => (
  <div className="shadow-lg w-80 md:w-[27vw] p-4 bg-gray-100 rounded-md mb-4 md:mb-0 md:h-[15vw]">
    <img src={img} alt="img" className="w-10 md:w-[1.7vw]" />
    <span className="block mt-2 text-sm md:text-[14px]">{text}</span>
    <div className="flex items-center mt-6 ">
      <img src={imgUser} alt="imgUser" className="w-10 md:w-[2.6vw]" />
      <div className="ml-2">
        <span className="block text-sm font-semibold">{userName}</span>
        <span className="block text-xs text-gray-400">{userRole}</span>
      </div>
      <img src={imgry} alt="imgry" className="ml-auto w-20 md:w-[6vw] h-5" />
    </div>
  </div>
);

export default ClientCard;
