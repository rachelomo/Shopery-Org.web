import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

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
const img10 = "Image (11).png";
const img11 = "Image (12).png";

const initialCategories = [
  { img: img, rate, name: "Fresh Fruit", price: "$14.99" },
  { img: img1, rate, name: "Beverages", price: "$14.99" },
  { img: img2, rate, name: "Fresh Vegetable", price: "$14.99" },
  { img: img3, rate, name: "Meat & Fish", price: "$14.99" },
  { img: img4, rate, name: "Snacks", price: "$14.99" },
  { img: img5, rate, name: "Beverages", price: "$14.99" },
  { img: img6, rate, name: "Beverages", price: "$14.99" },
  { img: img7, rate, name: "Beverages", price: "$14.99" },
  { img: img8, rate, name: "Beverages", price: "$14.99" },
  { img: img9, rate, name: "Beverages", price: "$14.99" },
  { img: img9, rate, name: "Beverages", price: "$14.99" },
  { img: img9, rate, name: "Beverages", price: "$14.99" },
  { img: img9, rate, name: "Beverages", price: "$14.99" },
  { img: img10, rate, name: "Beverages", price: "$14.99" },
  { img: img11, rate, name: "Beverages", price: "$14.99" },
];

const ShopImgSec = ({ addToCart }) => {
  return (
    <div className="px-4">
      <div className="flex flex-wrap justify-center mt-2 gap-5 ml-[10vw]">
        {initialCategories.map((category, index) => (
          <div
            key={index}
            className="border-[1px] relative group w-full sm:w-[48%] lg:w-[30%] p-2"
          >
            <div className="relative">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-auto"
              />
              {category.name === "Meat & Fish" && (
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <AiOutlineHeart className="text-white text-2xl m-2" />
                  <AiOutlineEye className="text-white text-2xl m-2" />
                </div>
              )}
            </div>
            <div className="mt-2">
              <h2 className="text-lg font-semibold">{category.name}</h2>
              <div className="flex justify-between items-center">
                <span className="text-md font-medium">{category.price}</span>
                <CiShoppingCart
                  className="text-2xl cursor-pointer"
                  onClick={() => addToCart(category)}
                />
              </div>
              <img src={category.rate} alt="rate" className="w-[5vw]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopImgSec;
