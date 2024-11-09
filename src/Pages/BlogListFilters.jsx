import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import BlogListImgFrst from "./BlogListImgFrst";
const img = "Filter 24px.png";

const BlogListFilters = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("Latest");
  const [filteredResults, setFilteredResults] = useState(52); // Initial count, should match actual data

  // Sample list of blog posts (mock data)
  const blogPosts = [
    /* Array of blog posts with fields like date, category, etc. */
  ];

  // Toggle filter visibility
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  // Handle sorting selection
  const handleSortChange = (order) => {
    setSortOrder(order);
    // Update results based on sorting order (e.g., latest to oldest)
    // Sort logic would be implemented here
  };

  // Apply filters to blogPosts
  const applyFilters = () => {
    // Mock filter logic (replace with actual filter logic)
    const results = blogPosts.filter((post) => {
      // Filtering conditions based on date, category, etc.
      return true;
    });
    setFilteredResults(results.length);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-around md:gap-40 gap-4 mt-5">
        {/* Filter Button */}
        <button
          onClick={toggleFilter}
          className="bg-green-600 flex items-center text-white gap-2 px-6 py-2 rounded-full"
        >
          Filter
          <img src={img} alt="img" className="w-4" />
        </button>

        {/* Filter Menu (Conditional Rendering) */}
        {isFilterOpen && (
          <div className="absolute top-16 bg-white shadow-md p-4 rounded-lg">
            <p className="text-gray-700 font-semibold mb-2">Filter Options:</p>
            {/* Add filter options here, e.g., categories */}
            <button
              onClick={applyFilters}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full"
            >
              Apply Filters
            </button>
          </div>
        )}

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2 md:gap-5 border rounded px-4 py-2 w-full md:w-auto">
          <span className="text-sm md:text-base">Sort by:</span>
          <span
            className="text-sm md:text-base cursor-pointer"
            onClick={() => handleSortChange(sortOrder === "Latest" ? "Oldest" : "Latest")}
          >
            {sortOrder}
          </span>
          <IoIosArrowDown className="text-sm md:text-base" />
        </div>

        {/* Results Found */}
        <div className="text-center md:text-right">
          <span className="text-sm md:text-base">
            <strong>{filteredResults}</strong> Results Found
          </span>
        </div>
      </div>

      {/* BlogListImgFrst component */}
      <BlogListImgFrst />
    </div>
  );
};

export default BlogListFilters;
