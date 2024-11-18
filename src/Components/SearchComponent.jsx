import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const searchRef = useRef(null); // Create a ref for the search component

  const items = [
    "Fresh Fruit",
    "Fresh Vegetable",
    "Meat and Fish",
    "Beverages",
    "Snacks",
    "Chines Cabbage",
    "Grape",
    "Tomato",
    "Organic Products",
    "Fresh Vegetables",
  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    setResults(
      items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSearchSubmit = () => {
    if (results.length > 0) {
      navigate(`/shopery/${results[0].toLowerCase().replace(/\s+/g, "-")}`);
    } else {
      alert("The search result does not exist.");
    }
  };

  const handleItemClick = (item) => {
    // Reset search term and results when an item is clicked
    setSearchTerm("");
    setResults([]);
    navigate(`/shopery/${item.toLowerCase().replace(/\s+/g, "-")}`);
  };

  // Close search results when clicking outside the search component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setResults([]); // Close the results if clicking outside
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4 relative" ref={searchRef}> {/* Attach ref here */}
      <div className="flex rounded border w-80">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="bg-green-600 text-white w-40"
          onClick={handleSearchSubmit}
        >
          Search
        </button>
      </div>

      {/* Pass the results and handleItemClick function to the SearchResults component */}
      {results.length > 0 && (
        <SearchResults results={results} handleItemClick={handleItemClick} />
      )}
    </div>
  );
};

export default SearchComponent;
