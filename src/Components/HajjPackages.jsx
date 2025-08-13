import React from "react";
import Hero from "./Hero";
// import bgImg from "../Images/HeaderBG.avif";
import bgImg from "../Images/hajjPackagesbg.jpeg";
import Wrapper from "./Wrapper";
import { hajjPackagesPageData } from "../../data/Data";
import CustomCard from "./CustomCard";
import Logo from "../Components/Logo";
import Button from "./Button";

function HajjPackages() {
  return (
    <div>
      <div id="hajjpackages">
        <Hero bgImg={bgImg} title="hajj packages" />
      </div>
      <Wrapper>
        <div>
          <div className="flex flex-col justify-center items-center py-10">
            <h2 className="text-[#ddb66a] text-3xl font-semibold font-serif pb-3">
              Hajj Packages 2026
            </h2>
            <p className="text-[#e8d8bb] pb-3">
              Hajj Packages 2026 – Affordable, Luxurious and Exclusive Options
              from India. Embark on your Hajj 2026 journey with Bakhla Tours &
              Travels — trusted by lakhs of pilgrims for over 37+ years. As you
              witness the majesty of Makkah and the serenity of Madinah, we
              ensure every step of your pilgrimage is thoughtfully planned.
            </p>
            <p className="text-[#e8d8bb] pb-3">
              Whether you’re searching for the best Hajj packages from India or
              you’re an NRI living abroad, we offer a wide range of options —
              from Luxury and Smart-Luxury packages to Affordable Hajj tours —
              all designed to suit your budget without compromising on quality
              or spiritual experience.
            </p>
            <h4 className="text-[#ddb66a] text-lg font-semibold font-serif">
              Let Hijrat be your Pathway to the Holy Kaaba
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 pb-20">
          {hajjPackagesPageData.map((item, index) => {
            return <CustomCard data={item} key={index} />;
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
                Hajj Package 2025 Brochure
              </h2>
              <p className=" font-serif text-[#e8d8bb]">
                Discover Hajj packages, pricing, and services. All in one
                well-organized PDF.
              </p>
            </div>
            <div>
              <Button text={"Download Brochure"} textColor={"#ddb66a"} />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default HajjPackages;
