import { SlCalender } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import BlogListImgSec from "./BlogListImgSec";

const img1 = "gallery.png";

// Mock data to simulate Shopery-related items
const SHOPERY_ITEMS = ["Fresh Fruit", "Vegetable", "Cooking", "Snack", "Beverages", "Bread & Bakery"];

const CATEGORIES = [
  { name: "Fresh Fruit", count: 134 },
  { name: "Vegetable", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snack", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Bread & Bakery", count: 38 },
];

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

const BlogListImgFrst = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handle search function
  const handleSearch = () => {
    const isShoperyRelated = SHOPERY_ITEMS.some((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isShoperyRelated) {
      navigate(`/shopery/${searchTerm}`);
    } else {
      alert("The item does not exist.");
    }
  };

  return (
    <div className="px-5 py-8 lg:px-20">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Sidebar */}
        <div className="w-full lg:w-2/5 pr-8 mb-8 lg:mb-0">
          {/* Search */}
          <div className="relative w-full mb-8">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <FaSearch className="text-gray-400 cursor-pointer" />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h2 className="font-bold text-lg mb-2">Top Categories</h2>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((category, index) => (
                <li key={index}>
                  <Link to="#" className="flex items-center justify-between">
                    {category.name}
                    <span className="text-gray-500">({category.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h2 className="font-bold text-lg mb-2">Popular Tags</h2>
            <ul className="flex flex-wrap gap-2">
              {TAGS.map((tag, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-lg border border-gray-200 bg-gray-100 px-4 py-1 rounded-lg"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="mb-8">
            <h2 className="font-bold text-lg mb-2">Our Gallery</h2>
            <div className="flex flex-wrap gap-1">
              {[...Array(8)].map((_, index) => (
                <img
                  key={index}
                  src={img1}
                  alt={`Gallery image ${index + 1}`}
                  className="w-1/5"
                />
              ))}
            </div>
          </div>

          {/* Recently Added */}
          <div>
            <h2 className="font-bold text-lg mb-2">Recently Added</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    src={img1}
                    alt={`Recently added image ${index + 1}`}
                    className="w-1/4"
                  />
                  <div>
                    <p className="text-black text-sm lg:text-lg">
                      Curabitur porttitor orci eget neque accumsan.
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <SlCalender className="mr-1 text-green-600" />
                      <span>Apr 25, 2021</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/5">
          <BlogListImgSec />
        </div>
      </div>
    </div>
  );
};

export default BlogListImgFrst;
