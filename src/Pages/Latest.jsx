import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const img = "Image (13).png";
const img1 = "Image (14).png";
const img2 = "Image (15).png";
const date = "Date.png";
const date1 = "Date (1).png";
const date2 = "Date (2).png";
const group = "Group.png";
const group1 = "Group (1).png";
const group2 = "Group (2).png";

const Latest = () => {
  const images = [
    { img, date },
    { img: img1, date: date1 },
    { img: img2, date: date2 },
  ];

  return (
    <div className="mt-10 px-4 md:px-20">
      <div className="flex justify-center font-bold text-[30px]">
        <h2>Latest News</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {images.map((item, index) => (
          <div key={index} className="relative w-full sm:w-1/2 lg:w-1/3 p-2">
            <img
              src={item.img}
              alt={`img${index}`}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-[15vw] left-10">
              <img
                src={item.date}
                alt={`date${index}`}
                className="w-12 md:w-16"
              />
            </div>
            <div className="shadow-lg bg-gray-100 flex flex-col gap-2 p-4 rounded-lg">
              <div className="flex gap-2 mb-2">
                <div className="flex items-center">
                  <img src={group} alt="group" className="w-4 md:w-4" />
                  <span className="text-xs md:text-sm ml-1">Food</span>
                </div>
                <div className="flex items-center">
                  <img src={group1} alt="group1" className="w-4 md:w-4" />
                  <span className="text-xs md:text-sm ml-1">By Admin</span>
                </div>
                <div className="flex items-center">
                  <img src={group2} alt="group2" className="w-4 md:w-4" />
                  <span className="text-xs md:text-sm ml-1">65 Comments</span>
                </div>
              </div>
              <p className="text-xs md:text-sm mb-2">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <Link
                to="/read-more"
                className="text-green-600 flex items-center text-sm md:text-base"
              >
                Read More <HiOutlineArrowSmallRight className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
