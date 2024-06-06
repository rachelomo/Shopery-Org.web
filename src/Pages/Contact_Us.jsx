import { CiLocationOn, CiMail } from "react-icons/ci";
import UncoloredNavbar from "../Components/UncoloredNavbar";
import ShopVegetable from "./ShopVegetable";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Contact_Us = () => {
  return (
    <div>
      {" "}
      <div>
        <UncoloredNavbar />
        <ShopVegetable />
      </div>
      <div>
        <div className="bg- text-center shadow-5 shadow-gray-200 flex flex-col w-60 h-80 gap-10 px-10 justify-center">
          <div className="">
            <CiLocationOn className="text-green-600 text-[30px] ml-[5vw]" />
            <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
          </div>

          <div>
            <CiMail className="text-green-600 text-[30px] ml-[5vw]" />
            <span>Proxy@gmail.com Help.proxy@gmail.com</span>
          </div>
          <div>
            <MdOutlinePhoneInTalk className="text-green-600 text-[30px] ml-[5vw]" />
            <span>(219) 555-0114 (164) 333-0487</span>
          </div>
        </div>
        <div>
          <div>
            <h2>Just Say Hello!</h2>
            <span>
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </span>
          </div>
          <div>
            <span>Template Cookie</span>
            <span>zakirsoft@gmail.com</span>
          </div>
          <div>
            <h2>Hello|</h2>
          </div>
          <div>
            <span>Subjects</span>
          </div>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
