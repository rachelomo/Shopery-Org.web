import UncoloredNavbar from "../Components/UncoloredNavbar";
import ShopVegetable from "./ShopVegetable";
// const img = "";
const About_Us = () => {
  return (
    <div>
      <div>
        <UncoloredNavbar />
        <ShopVegetable />
      </div>
      <div>
        <div>
          <h2>100% Trusted Organic Food Store</h2>
          <span>
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </span>
        </div>
        <div>{/* <img src={img} alt="img" /> */}</div>
      </div>
    </div>
  );
};

export default About_Us;
