import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import BlogListImgSec from "./BlogListImgSec";

const img1 = "gallery.png"; // Assuming img1 is the file name

const CATEGORIES = [
  { name: "Fresh Fruit", count: 134 },
  { name: "Vegetable", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snack", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Bread & Bakery", count: 38 },
  { name: "Bread & Bakery", count: 15 },
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
  return (
    <div className="px-20 py-8">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Sidebar */}
        <div className="w-full lg:w-[40%] pr-8 mb-8 lg:mb-0">
          {/* Search */}
          <div className="relative w-full mb-8">
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FaSearch className="text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h2 className="font-bold text-lg mb-2">Top Categories</h2>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((category, index) => (
                <li key={index}>
                  <Link to="#" className="flex items-center justify-between">
                    {category.name}{" "}
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
                    className="text-[2vw] border border-gray-200 bg-gray-100 px-1 rounded-lg"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="mb-8">
            <h2 className="font-bold text-[2vw] mb-2">Our Gallery</h2>
            <div className="flex flex-wrap gap-1">
              {[...Array(8)].map((_, index) => (
                <img key={index} src={img1} alt="Gallery" className="w-[7vw]" />
              ))}
            </div>
          </div>

          {/* Recently Added */}
          <div>
            <h2 className="font-bold text-lg mb-2">Recently Added</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img src={img1} alt="Recently Added" className="w-[7vw]" />
                  <div>
                    <p className="text-black text-[18px]">
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
        <div className="w-full lg:w-[55%]">
          <BlogListImgSec />
        </div>
      </div>
    </div>
  );
};

export default BlogListImgFrst;
