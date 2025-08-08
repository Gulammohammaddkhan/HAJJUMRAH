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

function Home() {
  const updatedData = packageCategories.map((obj, index) => {
    return { ...obj, id: Date.now() + index };
  });

  return (
    <div>
      <Hero />
      <Wrapper>
        <h2 className="text-[#ddb66a] text-5xl  font-bold flex justify-center py-20">
          What we Offers
        </h2>

        {updatedData?.map((obj) => {
          return (
            <div key={obj.id}>
              <h2 className="text-[#ddb66a] text-3xl pt-20  font-semibold custom-heading flex justify-center pb-10 animate__animated animate__pulse animate__infinite">
                {obj.type}
              </h2>
              {obj.type !== "Ramadan Packages" ? (
                <Carousel data={obj.package} />
              ) : (
                <div className="flex flex-wrap gap-10 justify-center items-center">
                  {obj.package.map((item, i) => {
                    return <CustomCard data={item} key={i} />;
                  })}
                </div>
              )}
              <div className="flex justify-center mt-7">
                <Button
                  className="  "
                  text={"View All"}
                  bgColor={""}
                  textColor={"#ddb66a"}
                />
              </div>
            </div>
          );
        })}
        <Media />
        <About aboutData={aboutData} />
        <Help />
        <Partners partnersData={partnersData} />
      </Wrapper>
      <Footer footerData={footerData} />
    </div>
  );
}

export default Home;
