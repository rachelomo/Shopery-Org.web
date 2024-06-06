import UncoloredNavbar from "../Components/UncoloredNavbar";

import Shop from "./Shop";
import ShopVegetable from "./ShopVegetable";
import Subscribtion from "./Subscribtion";

const Shoplist =  ({ addToCart }) => {
  return (
    <div className="mb-10 ">
      <div>
        <UncoloredNavbar />
      </div>
      <div>
        <ShopVegetable />
      </div>
      <Shop addToCart={addToCart} />
      <Subscribtion />
    </div>
  );
};

export default Shoplist;
