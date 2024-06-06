import ShopVegetable from "../Pages/ShopVegetable";
import UncoloredNavbar from "./UncoloredNavbar";

const CheckoutPage = () => {
  return (
    <div>
      <UncoloredNavbar />
      <ShopVegetable />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center mt-4">Checkout</h2>
      </div>
    </div>
  );
};

export default CheckoutPage;
