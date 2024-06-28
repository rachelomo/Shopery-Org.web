import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Filter from "./Filter";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import ShopImgSec from "./ShopImgSec";
const img2 = "";

const img1 = "/gallery.png";
const img = "/Instagram Post.png";

const TAGS = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Meat",
  "Lunch",
  "Dinner",
];

const CATEGORIES = [
  "Vegetable(150)",
  "Cooking(54)",
  "Snacks(47)",
  "Beverages(43)",
  "Beauty and health(38)",
  "Bread and Bakery(15)",
];

const Shop = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.includes(rating)
        ? prevRatings.filter((r) => r !== rating)
        : [...prevRatings, rating]
    );
  };

  return (
    <div className="mb-10">
      <Filter />
      <div className="flex flex-col lg:flex-row px-4 lg:px-[8vw] my-10">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 mb-10 lg:mb-0">
          <form className="flex flex-col gap-4">
            {/* Categories */}
            <h2
              className="font-bold text-lg flex items-center justify-between cursor-pointer"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              All Categories{" "}
              <span>
                {isCategoriesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h2>
            {isCategoriesOpen &&
              CATEGORIES.map((category, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="radio"
                    className="h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded"
                    onChange={() => handleCategoryChange(category)}
                    checked={selectedCategory === category}
                  />
                  <span className="ml-2 block text-sm text-gray-900">
                    {category}
                  </span>
                </label>
              ))}

            {/* Price */}
            <h2
              className="font-bold text-lg flex items-center justify-between cursor-pointer"
              onClick={() => setIsPriceOpen(!isPriceOpen)}
            >
              Price{" "}
              <span>{isPriceOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </h2>
            <div>
              <img src={img2} alt="img2" />
            </div>
            {isPriceOpen && <span>Price 50 - 1,500</span>}

            {/* Rating */}
            <h2
              className="font-bold text-lg flex items-center justify-between cursor-pointer"
              onClick={() => setIsRatingOpen(!isRatingOpen)}
            >
              Rating{" "}
              <span>
                {isRatingOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h2>
            {isRatingOpen &&
              [5, 4, 3, 2, 1].map((stars, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded"
                    onChange={() => handleRatingChange(stars)}
                    checked={selectedRatings.includes(stars)}
                  />
                  <span className="ml-2 block text-sm flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <MdStarRate
                        key={i}
                        className={
                          i < stars ? "text-orange-600" : "text-gray-300"
                        }
                      />
                    ))}
                  </span>
                  <span className="text-[9px] ml-1">{stars}.0</span>
                </label>
              ))}

            {/* Popular Tags */}
            <div className="mb-8">
              <h2
                className="font-bold text-lg flex items-center justify-between cursor-pointer"
                onClick={() => setIsTagsOpen(!isTagsOpen)}
              >
                Popular Tags{" "}
                <span>
                  {isTagsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </h2>
              {isTagsOpen && (
                <ul className="flex flex-wrap gap-2 mt-5">
                  {TAGS.map((tag, index) => (
                    <li key={index}>
                      <Link
                        to="#"
                        className={`text-[15px] border border-gray-200 px-1 rounded-lg ${
                          tag === "Low fat"
                            ? "bg-green-600 text-white  pl-4 pr-4 pt-1 pb-1"
                            : "bg-gray-100"
                        }`}
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Discount Section */}
            <div className="relative mb-8">
              <img src={img} alt="Discount" className="w-60" />
              <div className="absolute inset-0 text-white flex flex-col px-10 mt-5">
                <h2 className="text-2xl font-bold">
                  <span className="text-orange-400">79%</span>
                  <span> Discount</span>
                </h2>
                <span className="px-3">on your first order</span>
                <Link
                  to="#"
                  className="text-green-600 font-bold flex items-center mt-2 px-8"
                >
                  Shop Now <HiOutlineArrowSmallRight />
                </Link>
              </div>
            </div>

            {/* Sale Product */}
            <div>
              <h2 className="font-bold text-lg mb-2">Sale Product</h2>
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <img src={img1} alt="Sale Product" className="w-[7vw]" />
                    <div>
                      <p className="text-black text-[18px]">Red Capsicum</p>
                      <div className="flex flex-col text-xs text-gray-500">
                        <span>
                          $24.00 <span className="line-through">$20.99</span>
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <MdStarRate key={i} className="text-orange-600" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <ShopImgSec addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
