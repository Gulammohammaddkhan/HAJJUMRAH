import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";
import Hero from "./Hero";
import bgImg from "../Images/geminiImg.png";
import Wrapper from "./Wrapper";

function Contact() {
  return (
    <div>
      <Hero bgImg={bgImg} title={"Contact Us"} />
      <div className="border-t border-[#e8d8bb]/30 border-b border-[#e8d8bb]/30 py-8 sm:py-12 px-4 sm:px-6">
        <div
          id="contact"
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 sm:px-10 py-8 sm:py-12 bg-[#303030] rounded-2xl shadow-xl shadow-[#ddb66a]/10 border border-[#ddb66a]/30 text-white"
        >
          <div className="flex flex-col justify-start items-center text-center w-full p-4 hover:scale-105 transition-all">
            <MdLocationOn className="text-[#ddb66a] mb-2" size={"46px"} />
            <h2 className="text-[#ddb66a] text-xl sm:text-2xl font-serif font-semibold pb-2">
              Address
            </h2>
            <p className="text-[#e8d8bb] text-sm sm:text-base leading-relaxed">
              Shop No. 6 & 7, Gulistan Complex, Naya Nagar, Mira Road (E),
              PIN - 401107
            </p>
          </div>

          <div className="flex flex-col justify-start items-center text-center w-full p-4 hover:scale-105 transition-all border-y md:border-y-0 md:border-x border-[#ddb66a]/20">
            <IoIosMailOpen className="text-[#ddb66a] mb-2" size={"46px"} />
            <h2 className="text-[#ddb66a] text-xl sm:text-2xl font-serif font-semibold pb-2">
              Email Address
            </h2>
            <a
              href="mailto:gulamkhan512@gmail.com"
              className="text-[#e8d8bb] hover:text-[#ddb66a] text-sm sm:text-base transition-colors break-all"
            >
              gulamkhan512@gmail.com
            </a>
          </div>

          <div className="flex flex-col justify-start items-center text-center w-full p-4 hover:scale-105 transition-all">
            <FaMobileRetro className="text-[#ddb66a] mb-2" size={"46px"} />
            <h2 className="text-[#ddb66a] text-xl sm:text-2xl font-serif font-semibold pb-2">
              Contact Info
            </h2>
            <a
              href="tel:+917977199070"
              className="text-[#e8d8bb] hover:text-[#ddb66a] text-sm sm:text-base transition-colors"
            >
              +91 7977199070
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
