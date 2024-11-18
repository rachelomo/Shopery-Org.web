import React from 'react';

const SearchResults = ({ results, handleItemClick }) => {
  return (
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
  );
};

export default SearchResults;
