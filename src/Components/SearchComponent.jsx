import React, { useState } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // For demonstration purposes, filter a static list of items
    const items = [
      "Fresh Fruit",
      "Fresh Vegetable",
      "Meat and Fish",
      "Beverages",
      "Snacks",
      "Chines Cabbage",
      "Grape",
      "Tomato",
    ];
    setResults(
      items.filter((item) =>
        item.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="p-4">
      <div className="flex rounded border w-80">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="bg-green-600 text-white w-40">Search</button>
      </div>
      <ul className="list-disc list-inside">
        {results.map((result, index) => (
          <li key={index} className="p-1">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
