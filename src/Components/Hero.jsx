import React from "react";
import "animate.css";
import { TypewriterEffectSmooth } from "./ui/typerwritterEffect";
import Wrapper from "./Wrapper";
import { useLocation } from "react-router-dom";

function Hero({ bgImg, title }) {
  const location = useLocation();

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
    <div
      className="hero relative flex flex-col justify-center items-center min-h-[420px] sm:min-h-[480px] md:min-h-[560px] w-full pt-16 px-4 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url(${bgImg})`,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-4xl text-center">
        {location.pathname === "/" && <TypewriterEffectSmooth words={words} />}

        {location.pathname !== "/contact" && title && (
          <h2 className="animate__animated animate__pulse animate__infinite text-2xl sm:text-3xl md:text-4xl font-bold text-[#ddb66a] tracking-wide mt-2 px-2 capitalize">
            Welcome to {title}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Hero;
