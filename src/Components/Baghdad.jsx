import React from "react";
import Hero from "./Hero";
import ziyarat from "../Images/Ziyaratbg.avif";
import {
  ziyaratDetailData,
  ziyaratExpandData,
  ziyaratPackagesPageData,
} from "../../data/Data";
import Wrapper from "./Wrapper";
import { useState } from "react";
import Button from "./Button";
import CustomCard from "./CustomCard";

function Baghdad() {
  const [expand, setExpand] = useState(false);
  function clickHandler() {
    setExpand((prev) => !prev);
  }

  const renderExpandItem = (item, index) => (
    <div key={index} className="flex flex-col justify-center items-center text-center pb-4">
      <h2 className="text-[#ddb66a] text-xl sm:text-2xl md:text-3xl font-semibold font-serif py-4">
        {item.title}
      </h2>
      <p className="text-[#e8d8bb] text-sm sm:text-base leading-relaxed text-justify sm:text-center">
        {item.disc}
      </p>
    </div>
  );

  return (
    <div>
      <Hero bgImg={ziyarat} title={"Ziyarat Packages"} />
      <Wrapper>
        <div className="max-w-4xl mx-auto">
          {ziyaratDetailData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col justify-center items-center py-8 md:py-12 text-center">
                <h2 className="text-[#ddb66a] text-xl sm:text-2xl md:text-3xl font-semibold font-serif pb-3">
                  {item.title}
                </h2>
                <p className="text-[#e8d8bb] text-sm sm:text-base leading-relaxed text-justify sm:text-center">
                  {item.disc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center pb-8">
          {expand
            ? ziyaratExpandData.map((item, index) => renderExpandItem(item, index))
            : ziyaratExpandData.slice(0, 1).map((item, index) => renderExpandItem(item, index))}
          <div className="mt-4">
            <Button
              onClick={clickHandler}
              text={expand ? "View Less" : "View More"}
              textColor={"#ddb66a"}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12 md:pb-20 justify-items-center">
          {ziyaratPackagesPageData.map((item, index) => {
            return <CustomCard data={item} key={index} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
}

export default Baghdad;
