import React from "react";
import "animate.css";
import { TypewriterEffectSmooth } from "./ui/typerwritterEffect";
import Wrapper from "./Wrapper";

function Hero() {
  const words = [
    {
      text: "AS  ",
      className: "text-[#ddb66a] mr-[3px]",
    },
    {
      text: " SALAAMU",
      className: "text-[#ddb66a] mr-[3px]",
    },
    {
      text: " ALAIKUM",
      className: "text-[#ddb66a] mr-[3px]",
    },
  ];
  return (
    <div className="hero flex flex-col justify-center items-center">
      <Wrapper>
        <TypewriterEffectSmooth words={words} />
      </Wrapper>
      <h2 className=" animate__animated animate__pulse animate__infinite items-center  text-3xl font-semibold  text-[#ddb66a]">
        Welcome to Hijrat Tours
      </h2>
    </div>
  );
}

export default Hero;
