import { useState } from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";

const img = "Image (12).png";
const img1 = "Image (1).png";
const img2 = "Image (3).png";
const img3 = "Image (4).png";
const img4 = "Image (5).png";
const img5 = "Image (6).png";
const img6 = "Image (7).png";
const img7 = "Image (8).png";
const img8 = "Image (9).png";
const img9 = "Image (10).png";
const img10 = "Image (11).png";
const img11 = "Image (12).png";

const initialCategories = [
  {
    img: img,
    rat: <MdStarRate />,
    icons: <CiHeart />,
    Buton: "Add to cart",
    Cart: <CiShoppingCart />,
    eye: <IoEyeOutline />,
    nam: "Chines Cabbage",
    pric: "$14.99 $20.99",
    text: "hurry up! offer ends in:",
    day: "01 Day",
    hour: "23 hours",
    min: "34 Mins",
    sec: "57 Secs",
    test: "(524 Feedback)",
  },
  {
    img: img1,
    rate: "Rating.png",
    name: "Fresh Fruit",
    price: "$14.99 $20.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img2,
    rate: "Rating.png",
    name: "Fresh Vegetable",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img3,
    rate: "Rating.png",
    name: "Meat & Fish",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img4,
    rate: "Rating.png",
    name: "Snacks",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img5,
    rate: "Rating.png",
    name: "Beverages",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img6,
    rate: "Rating.png",
    name: "Beverages",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img7,
    rate: "Rating.png",
    name: "Beverages",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img8,
    rate: "Rating.png",
    name: "Beverages",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img9,
    rate: "Rating.png",
    name: "Beverages",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img10,
    rate: "Rating.png",
    name: "Beverages",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
  {
    img: img11,
    rate: "Rating.png",
    name: "Beverages",
    price: "$14.99",
    cart: <CiShoppingCart />,
  },
];

const moreCategories = [
  { img: img3, name: "Dairy Products" },
  { img: img4, name: "Frozen Foods" },
  { img: img1, name: "Organic Foods" },
  { img: img2, name: "Bakery" },
];

export const Deal = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
    setCategories([...categories, ...moreCategories]);
  };

  return (
    <div className="px-4 md:px-20 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Hot Deals</h1>
        {!showMore && (
          <div>
            <Link
              to="#"
              onClick={handleShowMore}
              className="text-green-600 flex items-center"
            >
              View All <HiOutlineArrowSmallRight className="ml-1" />
            </Link>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden group relative"
          >
            <div className="relative ">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-45 object-cover"
              />
              {/* first image items */}
              <div className="flex">
                <div className="p-4">
                <div className="flex justify-around items-center mt-2 px-2">
                <span className="text-xl text-gray-600">{category.icons}</span>
                <button
                  className="bg-green-600 text-white flex items-center px-0 py-1 rounded-full gap-2 text-sm hover:bg-green-500 transition"
                >
                  {category.Buton} {category.Cart}
                </button>
                <span className="text-xl text-gray-600">{category.eye}</span>
              </div>
                  <div className="flex flex-col items-center gap-1">
                    <h2 className="text-lg font-medium">{category.nam}</h2>
                    <span>{category.pric}</span>
                    <div className="flex items-center">
                      <span className="text-orange-600">{category.rat}</span>
                      <span className="text-orange-600">{category.rat}</span>
                      <span className="text-orange-600">{category.rat}</span>
                      <span className="text-orange-600">{category.rat}</span>
                      <span className="text-orange-600">{category.rat}</span>
                      <span className="text-orange-600">{category.rat}</span>
                      <span className="text-[12px]">{category.test}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span>{category.text}</span>
                    <div className="flex ">
                      <span>{category.day}</span>
                      <span>{category.hour}</span>
                      <span>{category.min}</span>
                      <span>{category.sec}</span>
                    </div>
                  </div>
                </div>
              </div>
              {category.name === "Meat & Fish" && (
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <AiOutlineHeart className="text-white text-2xl m-2" />
                  <AiOutlineEye className="text-white text-2xl m-2" />
                </div>
              )}
            </div>
            <div className="">
              <h2 className="text-lg font-medium">{category.name}</h2>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">{category.rate}</span>
                <span className="text-xl cursor-pointer">{category.cart}</span>
              </div>
   
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deal;
