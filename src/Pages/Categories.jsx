import { useState } from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Popular from "./Popular";

const img1 = "image 1.png";
const img2 = "image 2.png";
const img3 = "image 1.png";
const img4 = "image 2.png";
const img5 = "image 1.png";
const img6 = "image 2.png";
const img7 = "image 2.png";
const img8 = "image 2.png";
const img9 = "image 2.png";
const img10 = "image 2.png";
const img11 = "image 2.png";
const img12 = "image 2.png";

const initialCategories = [
  { img: img1, name: "Fresh Fruit" },
  { img: img2, name: "Fresh Vegetable" },
  { img: img3, name: "Meat & Fish" },
  { img: img4, name: "Snacks" },
  { img: img5, name: "Beverages" },
  { img: img6, name: "Beverages" },
  { img: img7, name: "Beverages" },
  { img: img8, name: "Beverages" },
  { img: img9, name: "Beverages" },
  { img: img10, name: "Beverages" },
  { img: img11, name: "Beverages" },
  { img: img12, name: "Beverages" },
];

const moreCategories = [
  { img: img3, name: "Dairy Products" },
  { img: img4, name: "Frozen Foods" },
  { img: img1, name: "Organic Foods" },
  { img: img2, name: "Bakery" },
  //  { img: img1, name: "Drinks" },
];

export const Categories = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
    setCategories([...categories, ...moreCategories]);
  };

  return (
    <div>
      <div className="flex justify-between px-20">
        <h1 className="text-2xl font-bold text-black px-3">
          Popular Categories
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
      <div
        className="flex flex-wrap items-center justify-center gap-10 mt-2 px-[2.3vw]"
        style={{ textAlign: "center" }}
      >
        {categories.map((category, index) => (
          <div key={index} className="border-[1px] w-[13vw] max-w-[160px]">
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-auto"
            />
            <h2 className="">{category.name}</h2>
          </div>
        ))}
      </div>
      <div>
        <Popular />
      </div>
    </div>
  );
};

export default Categories;
