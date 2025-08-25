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
      className="hero flex flex-col justify-center items-center"
      style={{
        background: `url(${bgImg})`,
        width: "100%",
        height: "560px",

        opacity: 0.85,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Wrapper>
        {location.pathname === "/" && <TypewriterEffectSmooth words={words} />}
      </Wrapper>
      {location.pathname === "/contact" ? (
        ""
      ) : (
        <h2 className=" animate__animated animate__pulse animate__infinite items-center  text-3xl font-semibold  text-[#ddb66a]">
          Welcome to {title}
        </h2>
      )}
      {/* <h2 className=" animate__animated animate__pulse animate__infinite items-center  text-3xl font-semibold  text-[#ddb66a]">
        Welcome to {title}
      </h2> */}
    </div>
  );
}

export default Hero;
