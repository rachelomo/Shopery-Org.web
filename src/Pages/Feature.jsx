import { useState } from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

const rate = "Rating.png";
const img1 = "Image (1).png";
const img2 = "Image (3).png";
const img3 = "Image (4).png";
const img4 = "Image (5).png";
const img5 = "Image (6).png";

const initialCategories = [
  { img: img1, rate, name: "Fresh Fruit", price: "$14.99 $20.99" },
  { img: img2, name: "Fresh Vegetable", price: "$14.99" },
  { img: img3, name: "Meat & Fish", price: "$14.99" },
  { img: img4, name: "Snacks", price: "$14.99" },
  { img: img5, name: "Beverages", price: "$14.99" },
];

const moreCategories = [
  { img: img3, name: "Dairy Products" },
  { img: img4, name: "Frozen Foods" },
  { img: img1, name: "Organic Foods" },
  { img: img2, name: "Bakery" },
  //  { img: img1, name: "Drinks" },
];

export const Feature = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
    setCategories([...categories, ...moreCategories]);
  };

  return (
    <div>
      <div className="flex justify-between px-20 mt-10">
        <h1 className="text-2xl font-bold text-black px-3">
          Feature Categories
        </h1>
        {!showMore && (
          <div>
            <Link
              to="#"
              onClick={handleShowMore}
              className="text-green-600 flex items-center px-[1vw]"
            >
              View All <HiOutlineArrowSmallRight className="" />
            </Link>
          </div>
        )}
      </div>
      <div className="ml-[6.7vw] mr-[7vw] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden group relative"
          >
            <div className="relative">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-45 object-cover"
              />
              {category.name === "Meat & Fish" && (
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <AiOutlineHeart className="text-white text-2xl m-2" />
                  <AiOutlineEye className="text-white text-2xl m-2" />
                </div>
              )}
            </div>
            <div>
              <h2 className="">{category.name}</h2>
              <div className="flex justify-between">
                <span className="">{category.price}</span>
                <CiShoppingCart className="text-[25px]" />
              </div>
              <img src={rate} alt="rate" className="w-[5vw]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
