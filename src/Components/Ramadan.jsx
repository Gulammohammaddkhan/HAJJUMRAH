import React, { useState } from "react";
import Hero from "./Hero";
import bgImg from "../Images/ramadanbackground.avif";
import { ramadanCardData, ramadanDetailData } from "../../data/Data";
import CustomCard from "./CustomCard";
import Wrapper from "./Wrapper";
import Button from "./Button";

function Ramadan() {
  const [expand, setExpend] = useState(false);
  function clickHandler() {
    return setExpend((prev) => !prev);
  }

  const renderDetailItem = (item, index) => (
    <div
      key={index}
      className="flex flex-col justify-center items-center text-center pb-4"
    >
      <h2 className="text-[#ddb66a] text-xl sm:text-2xl font-semibold font-serif py-3">
        {item.title}
      </h2>
      <p className="text-[#e8d8bb] text-sm sm:text-base leading-relaxed text-justify sm:text-center">
        {item.disc}
      </p>
    </div>
  );

  return (
    <div>
      <Hero bgImg={bgImg} title={"Ramadan Packages"} />
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-10 md:py-16 justify-items-center">
          {ramadanCardData.map((item, index) => {
            return (
              <div key={index} className="w-full flex justify-center">
                <CustomCard data={item} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center max-w-4xl mx-auto gap-4 pb-12">
          {expand
            ? ramadanDetailData.map((item, index) => renderDetailItem(item, index))
            : ramadanDetailData.slice(0, 1).map((item, index) => renderDetailItem(item, index))}
          <div className="mt-2">
            <Button
              onClick={clickHandler}
              text={expand ? "View Less" : "View More"}
              textColor={"#ddb66a"}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Ramadan;
