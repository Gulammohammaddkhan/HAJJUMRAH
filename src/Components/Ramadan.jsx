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
  return (
    <div>
      <Hero bgImg={bgImg} title={"Ramadam Packages"} />
      <Wrapper>
        <div className="flex justify-center gap-8 py-20">
          {ramadanCardData.map((item, index) => {
            return (
              <div key={index}>
                <CustomCard data={item} />
              </div>
            );
          })}
        </div>
        <div className=" flex flex-col gap-4">
          {expand
            ? ramadanDetailData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                  >
                    <h2 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
                      {item.title}
                    </h2>
                    <p className="text-[#e8d8bb] text-md">{item.disc}</p>
                  </div>
                );
              })
            : ramadanDetailData.slice(0, 1).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                  >
                    <h2 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
                      {item.title}
                    </h2>
                    <p className="text-[#e8d8bb] text-md">{item.disc}</p>
                  </div>
                );
              })}
          <Button
            onClick={clickHandler}
            text={expand ? "view less" : "view more"}
            textColor={"#ddb66a"}
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default Ramadan;
