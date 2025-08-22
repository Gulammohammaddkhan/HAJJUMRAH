import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";
import Hero from "./Hero";
import bgImg from "../Images/Geminiimg.png";
import Wrapper from "./Wrapper";

function Contact() {
  return (
    <div>
      <Hero bgImg={bgImg} title={""} />
      <div className="border-t-2 border-t-[#e8d8bb] border-b-2 border-b-[#e8d8bb] py-10 px-12">
        <div
          id="contact"
          className="flex text-white justify-between items-center gap-3 px-10 py-6 bg-[#303030]  rounded-xl shadow-lg shadow-[#e8d8bb] "
        >
          {/* <Wrapper> */}
          <div className="flex flex-col justify-center items-center w-[250px]  ">
            <MdLocationOn className="text-[#ddb66a]" size={"50px"} />
            <h2 className="text-[#ddb66a] text-2xl font-serif font-semibold pt-4 pb-2">
              Address
            </h2>
            <p className="text-[#e8d8bb]">
              shop no.6 and 7,gulistan complex,naya nagar,mira road-(e)
              pin-401107
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[250px]">
            <IoIosMailOpen className="text-[#ddb66a]" size={"50px"} />
            <h2 className="text-[#ddb66a] text-2xl font-serif font-semibold pt-4 pb-2">
              Email Address
            </h2>
            <p className="text-[#e8d8bb]">gulamkhan512@gmail.com</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[250px]">
            <FaMobileRetro className="text-[#ddb66a]" size={"50px"} />
            <h2 className="text-[#ddb66a] text-2xl font-serif font-semibold pt-4 pb-2">
              Contact Info
            </h2>
            <p className="text-[#e8d8bb] ">+917977199070</p>
          </div>
          {/* </Wrapper> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
