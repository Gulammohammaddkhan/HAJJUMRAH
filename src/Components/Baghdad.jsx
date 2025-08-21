import React from "react";
import Hero from "./Hero";
import ziyarat from "../Images/Ziyaratbg.avif";
import { ziyaratDetailData, ziyaratExpandData } from "../../data/Data";
import Wrapper from "./Wrapper";
import { useState } from "react";
import Button from "./Button";

function Baghdad() {
  const [expand, setExpand] = useState(false);
  function clickHandler() {
    setExpand((prev) => !prev);
  }

  return (
    <div>
      <Hero bgImg={ziyarat} title={"Ziyarat Packages"} />
      <Wrapper>
        <div>
          {ziyaratDetailData.map((item, index) => {
            return (
              <div className="flex flex-col justify-center items-center py-14 px-14">
                <h2 className="text-[#ddb66a] text-3xl font-semibold font-serif pb-4">
                  {item.title}
                </h2>
                <p className="text-[#e8d8bb] text-lg">{item.disc}</p>
              </div>
            );
          })}
        </div>
        <div className="px-10 flex flex-col justify-center items-center">
          {expand
            ? ziyaratExpandData.map((item, index) => {
                return (
                  <div className="flex flex-col justify-center items-center ">
                    <h2 className="self-center text-[#ddb66a] text-3xl font-semibold font-serif py-8">
                      {item.title}
                    </h2>
                    <p className="text-[#e8d8bb] text-lg">{item.disc}</p>
                  </div>
                );
              })
            : ziyaratExpandData.slice(0, 1).map((item, index) => {
                return (
                  <div className="flex flex-col justify-center items-center ">
                    <h2 className="self-center text-[#ddb66a] text-3xl font-semibold font-serif py-8">
                      {item.title}
                    </h2>
                    <p className="text-[#e8d8bb] text-lg">{item.disc}</p>
                  </div>
                );
              })}
          <Button
            onClick={clickHandler}
            text={expand ? "View Less" : "View More"}
            textColor={"#ddb66a"}
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default Baghdad;

