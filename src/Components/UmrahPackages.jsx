import React from "react";
import Hero from "../Components/Hero";
import bgImg from "../Images/umrahbg.avif";
import Wrapper from "./Wrapper";
import { umrahPackagesPageData } from "../../data/Data";
import CustomCard from "./CustomCard";
import Logo from "./Logo";
import Button from "./Button";
import Cards from "./Cards";

function UmrahPackages() {
  return (
    <div id="umrahpackages">
      UmrahPackages
      <Hero bgImg={bgImg} title={"Umrah Packages"} />
      <Wrapper>
        <div className="flex flex-col items-center px-10 py-10 gap-4">
          <h2 className="text-[#ddb66a] text-2xl font-semibold font-serif">
            Umrah Packages 2025-26
          </h2>
          <p className="text-[#e8d8bb]">
            Embark on a transformative journey with our exclusive Umrah packages
            from Bakhla Tours & Travels. As one of the most revered pilgrimages
            in Islam, Umrah offers Muslims an opportunity to purify their souls
            and strengthen their connection with Allah. At Bakhla Tours, we
            ensure that every aspect of your Umrah tour package is seamlessly
            taken care of, so you can focus entirely on your spiritual
            experience.
          </p>
          <p className="text-[#e8d8bb]">
            Let <strong className="text-[#ddb66a]"> Hijrat</strong> be your
            Pathway to the Holy Kaaba
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 pb-10">
          {umrahPackagesPageData.map((item, index) => {
            return (
              <div>
                <CustomCard data={item} key={index} />
              </div>
            );
          })}
        </div>
        <div className=" py-10  border-y-1 border-y-[#e8d8bb]">
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
        </div>
        <Cards hajjPackagesCardData={hajjPackagesCardData} />
        <div className=" py-10  border-y-1 border-y-[#e8d8bb]">
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
        </div>
        <div>
          {umrahDetailData.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.disc}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}

export default UmrahPackages;
