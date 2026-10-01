import React, { useId } from "react";
import Hero from "./Hero";
import Button from "./Button";
import Wrapper from "./Wrapper";
import Carousel from "./Carousel";
import {
  aboutData,
  packageCategories,
  partnersData,
  footerData,
} from "../../data/Data";
import Media from "./Media";
import About from "./About";
import CustomCard from "./CustomCard";
import Help from "./Help";
import Partners from "./Partners";
import Footer from "./Footer";
import bgImg from "../Images/HeaderBg3.jpg";
import { Link } from "react-router-dom";

function Home({ viewAllPath }) {
  const updatedData = packageCategories.map((obj, index) => {
    return { ...obj, id: Date.now() + index };
  });

  return (
    <div>
      <Hero bgImg={bgImg} title="Hijrat tours" />
      <Wrapper>
        <h2 className="text-[#ddb66a] text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-12 md:pt-20">
          What we Offer
        </h2>

        {updatedData?.map((obj) => {
          return (
            <div className="w-full" key={obj.id}>
              <h2 className="text-[#ddb66a] text-2xl sm:text-3xl pt-12 md:pt-16 pb-6 md:pb-8 font-semibold custom-heading text-center animate__animated animate__pulse animate__infinite">
                {obj.type}
              </h2>
              {obj.type !== "Ramadan Packages" ? (
                <Carousel data={obj.package} />
              ) : (
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 w-full max-w-5xl mx-auto py-2">
                  {obj.package.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="w-full sm:w-[350px] max-w-[370px] flex justify-center"
                      >
                        <CustomCard data={item} />
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="flex justify-center mt-7 text-[#ddb66a] font-serif font-semibold hover:text-[#e0c692] hover:scale-110 transition-all ease-in-out">
                <Link to={obj.viewAllLink}>View All</Link>
              </div>
            </div>
          );
        })}
        <Media />
        <About aboutData={aboutData} />
        {/* <Help /> */}
        {/* <Partners partnersData={partnersData} /> */}
      </Wrapper>
      {/* <Footer footerData={footerData} /> */}
    </div>
  );
}

export default Home;
