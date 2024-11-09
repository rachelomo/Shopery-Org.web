import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const items = [
    "Fresh Fruit",
    "Fresh Vegetable",
    "Meat and Fish",
    "Beverages",
    "Snacks",
    "Chines Cabbage",
    "Grape",
    "Tomato",
    "Shopery - Organic Products",
    "Shopery - Fresh Vegetables",
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
    navigate(`/shopery/${item.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="p-4 relative">
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
      
      {/* Display search results as an overlay */}
      {results.length > 0 && (
        <ul className="absolute top-[9.3vh] left-[1.2vw] w-[23.3vw] bg-white border border-gray-300 shadow-lg max-h-40 overflow-y-auto z-10">
          {results.map((result, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100 text-gray-800"
              onClick={() => handleItemClick(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
