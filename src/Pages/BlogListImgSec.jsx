import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
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

const BlogListImgSec = () => {
  const images = [
    { img, date },
    { img, date },
    { img: img1, date: date1 },
    { img: img1, date: date1 },
    { img: img1, date: date1 },
    { img: img2, date: date2 },
    { img: img2, date: date2 },
    { img: img2, date: date2 },
    { img: img2, date: date2 },
    { img: img2, date: date2 },
    { img: img2, date: date2 },
    { img: img2, date: date2 },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedImages = images.slice(startIndex, startIndex + itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`px-2 py-1 ${
              currentPage === i ? "bg-green-500 text-white rounded-full" : ""
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handleClick(1)}
          className={`px-2 py-1 ${
            currentPage === 1 ? "bg-green-500 text-white rounded-full" : ""
          }`}
        >
          1
        </button>
      );
      if (currentPage > 3) {
        pageNumbers.push(<span key="dots1">...</span>);
      }
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`px-2 py-1 ${
              currentPage === i ? "bg-green-500 text-white rounded-full" : ""
            }`}
          >
            {i}
          </button>
        );
      }
      if (currentPage < totalPages - 2) {
        pageNumbers.push(<span key="dots2">...</span>);
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          className={`px-2 py-1 ${
            currentPage === totalPages
              ? "bg-green-500 text-white rounded-full"
              : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="mt-5">
      <div className="flex flex-wrap gap-5 justify-center">
        {selectedImages.map((item, index) => (
          <div key={index} className="relative w-full md:w-[45%]">
            <img
              src={item.img}
              alt={`img${startIndex + index}`}
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-start justify-end p-2">
              <img
                src={item.date}
                alt={`date${startIndex + index}`}
                className="w-8 md:w-12"
              />
            </div>
            <div className="bg-gray-100 p-4 shadow-lg rounded-lg mt-2">
              <div className="flex gap-2 mb-2">
                <div className="flex items-center">
                  <img src={group} alt="group" className="w-4 md:w-5" />
                  <span className="text-xs md:text-sm ml-1">Food</span>
                </div>
                <div className="flex items-center">
                  <img src={group1} alt="group1" className="w-4 md:w-5" />
                  <span className="text-xs md:text-sm ml-1">By Admin</span>
                </div>
                <div className="flex items-center">
                  <img src={group2} alt="group2" className="w-4 md:w-5" />
                  <span className="text-xs md:text-sm ml-1">65 Comments</span>
                </div>
              </div>
              <p className="text-sm md:text-base mb-2">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <Link
                to="#"
                className="text-green-600 flex items-center text-sm md:text-base"
              >
                Read More <HiOutlineArrowSmallRight className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={handlePrevious}
          className="px-2 py-1"
          disabled={currentPage === 1}
        >
          <FaAngleLeft />
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNext}
          className="px-2 py-1"
          disabled={currentPage === totalPages}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default BlogListImgSec;
