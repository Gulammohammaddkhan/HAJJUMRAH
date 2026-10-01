import React, { useState } from "react";
import Hero from "../Components/Hero";
import bgImg from "../Images/umrahbg.avif";
import Wrapper from "./Wrapper";
import {
  umrahPackagesPageData,
  hajjPackagesCardData,
  umrahDetailData,
  umrahFaqData,
} from "../../data/Data";
import CustomCard from "./CustomCard";
import Logo from "./Logo";
import Button from "./Button";
import Cards from "./Cards";
import Brochure from "./Brochure";
import { FaMinus } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import Faq from "./Faq";

function UmrahPackages() {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand((prev) => !prev);
  }

  return (
    <div id="umrahpackages">
      <Hero bgImg={bgImg} title={"Umrah Packages"} />
      <Wrapper>
        <div className="flex flex-col items-center py-8 md:py-12 max-w-4xl mx-auto text-center gap-3">
          <h2 className="text-[#ddb66a] text-2xl sm:text-3xl md:text-4xl font-semibold font-serif">
            Umrah Packages 2025-26
          </h2>
          <p className="text-[#e8d8bb] text-sm sm:text-base leading-relaxed">
            Embark on a transformative journey with our exclusive Umrah packages
            from Bakhla Tours & Travels. As one of the most revered pilgrimages
            in Islam, Umrah offers Muslims an opportunity to purify their souls
            and strengthen their connection with Allah. At Bakhla Tours, we
            ensure that every aspect of your Umrah tour package is seamlessly
            taken care of, so you can focus entirely on your spiritual
            experience.
          </p>
          <p className="text-[#e8d8bb] text-base sm:text-lg">
            Let <strong className="text-[#ddb66a]"> Hijrat</strong> be your
            Pathway to the Holy Kaaba
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10 justify-items-center">
          {umrahPackagesPageData.map((item, index) => {
            return (
              <div key={index} className="w-full flex justify-center">
                <CustomCard data={item} />
              </div>
            );
          })}
        </div>
        {/* <div className=" py-10  border-y-1 border-y-[#e8d8bb]">
          <div className="flex justify-around items-center py-10  bg-[#303030] rounded-lg shadow-2xl">
            <div className="flex">
              <Logo />
              <div className="text-[#ddb66a] font-semibold">
                <p>HIJRAT</p>
                <p>For Life</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold font-serif text-[#ddb66a]">
                Umrah Package 2025 Brochure
              </h2>
              <p className=" font-serif text-[#e8d8bb]">
                Download our Umrah Brochure – Complete Details on Packages &
                Pricing.
              </p>
            </div>
            <div>
              <Button text={"Download Brochure"} textColor={"#ddb66a"} />
            </div>
          </div>
          </div> */}
        <Brochure
          header={"Umrah Package 2025 Brochure"}
          para={
            " Download our Umrah Brochure – Complete Details on Packages & Pricing."
          }
        />
        <Cards hajjPackagesCardData={hajjPackagesCardData} />
        {/* <div className=" py-10  border-y-1 border-y-[#e8d8bb]">
          <div className="flex justify-around items-center py-10  bg-[#303030] rounded-lg shadow-2xl">
            <div className="flex">
              <Logo />
              <div className="text-[#ddb66a] font-semibold">
                <p>HIJRAT</p>
                <p>For Life</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold font-serif text-[#ddb66a]">
                NOW OFFERING FLIGHTS FROM ALL MAJOR CITIES IN INDIA
              </h2>
              <p className=" font-serif text-[#e8d8bb]">
                DELHI|MUMBAI|BANGALORE|HYDERABAD|LUCKNOW|CHENNAI|SRINAGAR|KOLKATA
                & MANY MORE.
              </p>
            </div>
            <div className="flex">
              <Logo />
              <div className="text-[#ddb66a] font-semibold">
                <p>HIJRAT</p>
                <p>For Life</p>
              </div>
            </div>
          </div>
        </div> */}
        <Brochure
          header={"NOW OFFERING FLIGHTS FROM ALL MAJOR CITIES IN INDIA"}
          para={
            "DELHI|MUMBAI|BANGALORE|HYDERABAD|LUCKNOW|CHENNAI|SRINAGAR|KOLKATA & MANY MORE."
          }
        />
        <div className="py-8 md:py-12 border-b border-[#ddb66a]/20 max-w-4xl mx-auto">
          {expand
            ? umrahDetailData.map((item, id) => (
                <div key={id} className="pb-6">
                  <h2 className="text-[#ddb66a] text-xl sm:text-2xl md:text-3xl font-semibold font-serif pb-3 text-center sm:text-left">
                    {item.title}
                  </h2>
                  <p className="text-[#e8d8bb]/90 text-sm sm:text-base font-serif leading-relaxed text-justify sm:text-left">
                    {item.disc}
                  </p>
                </div>
              ))
            : umrahDetailData.slice(0, 1).map((item, id) => (
                <div key={id} className="pb-6">
                  <h2 className="text-[#ddb66a] text-xl sm:text-2xl md:text-3xl font-semibold font-serif pb-3 text-center sm:text-left">
                    {item.title}
                  </h2>
                  <p className="text-[#e8d8bb]/90 text-sm sm:text-base font-serif leading-relaxed text-justify sm:text-left">
                    {item.disc}
                  </p>
                </div>
              ))}
          <div className="flex justify-center mt-4">
            <Button
              onClick={handleExpand}
              text={expand ? "View Less" : "View More"}
              textColor={"#ddb66a"}
            />
          </div>
        </div>
        <div>
          <Faq data={umrahFaqData} />
        </div>
      </Wrapper>
    </div>
  );
}

export default UmrahPackages;

// {umrahFaqData.map((item, index) => {
//               const isOpen = currentIndex === index;
//               return (
//                 <div className="bg-red-400">
//                   <div className="flex justify-between pb-8">
//                     <h2>{item.title}</h2>
//                     <button onClick={() => clickHandler(index)}>
//                       {isOpen ? <FiMinus /> : <FiPlus />}
//                     </button>
//                   </div>
//                   <div
//                     className={` transition-all duration-300 overflow-hidden ${
//                       isOpen ? "max-h-[800px] p-4 pt-0" : "max-h-0"
//                     }`}
//                   >
//                     <p>{item.para}</p>
//                   </div>
//                 </div>
//               );
//             })}
