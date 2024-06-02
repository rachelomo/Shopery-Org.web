const img = "mango-1.png";
const img1 = "Group (3).png";
const img2 = "food.png";
const img3 = "bookoff-corporation-logo.png";
const img4 = "Group (4).png";

const NomalTest = () => {
  return (
    <div className="flex flex-wrap items-center justify-Between mt-5 space-y-4 md:space-y-0 gap-4 md:gap-[10vw] px-20">
      <div className="w-full md:w-auto text-center md:text-left">
        <h2 className="text-lg md:text-[3vw] text-green-600 ml-1">
          <i>steps</i>
        </h2>
      </div>
      <div>
        <img src={img} alt="img" className="w-16 md:w-[5vw]" />
      </div>
      <div>
        <img src={img1} alt="img1" className="w-16 md:w-[5vw]" />
      </div>
      <div>
        <img src={img2} alt="img2" className="w-16 md:w-[5vw]" />
      </div>
      <div>
        <img src={img3} alt="img3" className="w-20 md:w-[8vw]" />
      </div>
      <div>
        <img src={img4} alt="img4" className="w-20 md:w-[7vw]" />
      </div>
    </div>
  );
};

export default NomalTest;
