import React, { useState, useEffect } from "react";

const imgry = "/Breadcrumbs.png";
const img1 = "/orange.png";

const FreshFruit = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading process (e.g., fetching data)
  useEffect(() => {
   const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        <div className="relative">
          <img src={imgry} alt="Breadcrumbs" />
          <div className="absolute text-white inset-0 flex items-center px-[8.5vw] gap-2">
            <img
              src={img1}
              alt="Fresh Fruit"
              className="w-[5vw] object-cover opacity-1"
            />
            <h2 className="text-green-600">Fresh Fruit</h2>
          </div>
        </div>
      </div>
<div className="px-[8.5vw] mt-5">
<h2>Welcome to the Fresh Fruit page!</h2>
</div>
      {/* Display loading message or spinner */}
      {loading ? (
        <div className="flex justify-center items-center my-20">
          <div className="spinner-border animate-spin w-12 h-12 border-4 border-t-4 border-green-600 rounded-full"></div>
        </div>
      ) : (
        // Content that will be shown after loading
        <div className="flex flex-col items-center justify-center my-20">
            <h2>Oops! Fresh Fruit is Currently Unavailable</h2>
<p>We're working on bringing it back. Please check back later.</p>

        </div>
      )}
    </div>
  );
};

export default FreshFruit;
