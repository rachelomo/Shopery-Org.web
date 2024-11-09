import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const img = "Filter 24px.png";

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("Latest");
  const [filteredResults, setFilteredResults] = useState(52); // Initial result count

  // Toggle filter menu visibility
  const toggleFilterMenu = () => setIsFilterOpen(!isFilterOpen);

  // Handle sorting change
  const handleSortChange = () => {
    setSortOrder(sortOrder === "Latest" ? "Oldest" : "Latest");
    // Sorting logic could go here based on `sortOrder`
    // Update `filteredResults` based on the sorted data
  };

  // Mock function to apply filters
  const applyFilters = () => {
    // Logic to apply filters to data
    // This is where you’d update `filteredResults` with filtered data count
    setFilteredResults(40); // Example: after filtering, update result count
  };

  return (
    <div className="flex items-center justify-around gap-7 mt-5">
      {/* Filter Button */}
      <button
        onClick={toggleFilterMenu}
        className="bg-green-600 border rounded flex items-center text-white gap-2 px-8 py-2"
        style={{ borderRadius: "20px" }}
      >
        Filter
        <img src={img} alt="img" className="w-4" />
      </button>

      {/* Filter Menu (Conditional Rendering) */}
      {isFilterOpen && (
        <div className="absolute top-16 bg-white shadow-md p-4 rounded-lg">
          <p className="text-gray-700 font-semibold mb-2">Filter Options:</p>
          {/* Add actual filter options here */}
          <button
            onClick={() => {
              applyFilters();
              toggleFilterMenu(); // Close menu after applying
            }}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full"
          >
            Apply Filters
          </button>
        </div>
      )}

      {/* Sort By Dropdown */}
      <div
        onClick={handleSortChange}
        className="flex items-center gap-5 border rounded px-8 py-2 cursor-pointer"
      >
        <span>Sort by:</span>
        <span>{sortOrder}</span>
        <IoIosArrowDown />
      </div>

      {/* Results Found */}
      <div>
        <span>
          <strong>{filteredResults}</strong> Results Found
        </span>
      </div>
    </div>
  );
};

export default Filter;
