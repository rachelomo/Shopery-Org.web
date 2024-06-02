import { useState } from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import Deal from "./Deal";
import OneImg from "./OneImg";
import Feature from "./Feature";
import SlidePopular from "./SlidePopular";
import Latest from "./Latest";
import ClientCard from "./ClientCard";
import NomalTest from "./NomalTest";
import FollowIg from "./FollowIg";
import Subscribtion from "./Subscribtion";
// import Popular from "./Popular";

const rate = "Rating.png";
const img = "Image.png";
const img1 = "Image (1).png";
const img2 = "Image (3).png";
const img3 = "Image (4).png";
const img4 = "Image (5).png";
const img5 = "Image (6).png";
const img6 = "Image (7).png";
const img7 = "Image (8).png";
const img8 = "Image (9).png";
const img9 = "Image (10).png";
// const img10 = "Image (11).png";
// const img11 = "Image (12).png";
// const img12 = "Image (13).png";

const initialCategories = [
  { img: img, rate, name: "Fresh Fruit", price: "$14.99 $20.99" },
  { img: img1, name: "Beverages", price: "$14.99" },
  { img: img2, name: "Fresh Vegetable", price: "$14.99" },
  { img: img3, name: "Meat & Fish", price: "$14.99" },
  { img: img4, name: "Snacks", price: "$14.99" },
  { img: img5, name: "Beverages", price: "$14.99" },
  { img: img6, name: "Beverages", price: "$14.99" },
  { img: img7, name: "Beverages", price: "$14.99" },
  { img: img8, name: "Beverages", price: "$14.99" },
  { img: img9, name: "Beverages", price: "$14.99" },
  // { img: img10, name: "Beverages", price: "$14.99" },
  // { img: img11, name: "Beverages", price: "$14.99" },
];

const moreCategories = [
  { img: img3, name: "Dairy Products" },
  { img: img4, name: "Frozen Foods" },
  { img: img1, name: "Organic Foods" },
  { img: img2, name: "Bakery" },
  //  { img: img1, name: "Drinks" },
];

export const Popular = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
    setCategories([...categories, ...moreCategories]);
  };

  return (
    <div>
      <div className="flex justify-between px-20 mt-10">
        <h1 className="text-2xl font-bold text-black px-3">Popular Product</h1>
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
      <div className="flex flex-wrap justify-center mt-2 px-10 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="border-[1px] relative group">
            <div className="relative">
              <img
                src={category.img}
                alt={category.name}
                className="w-[16vw] h-auto"
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
      <div>
        <SlidePopular />
        <Deal />
        <OneImg />
        <Feature />
        <Latest />
        <ClientCard />
        <NomalTest />
        <FollowIg />
        <Subscribtion />
      </div>
    </div>
  );
};

export default Popular;
