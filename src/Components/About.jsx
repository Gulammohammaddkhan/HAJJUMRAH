import { div } from "motion/react-client";
import React, { useState } from "react";
import Button from "./Button";

function About({ aboutData }) {
  const [expand, setExpand] = useState(false);
  function handleExpand() {
    setExpand((prev) => !prev);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col">
        <h1 className="text-3xl custom-heading text-[#ddb66a] font-bold animate__animated animate__pulse animate__infinite flex justify-center pb-10">
          Hijrat Tours & Travels
        </h1>

        <div>
          {expand
            ? aboutData.map((item, id) => {
                return (
                  <div className=" text-[#e8d8bb] " key={id}>
                    <h2 className="text-[#ddb66a]  text-3xl py-8 font-semibold flex justify-center">
                      {item.title}
                    </h2>
                    <div className="text-lg">
                      <p>{item.disc}</p>
                      <p>{item.disc2}</p>
                      <p>{item.disc3}</p>
                      <p>{item.disc4}</p>
                      <p>{item.disc5}</p>
                      <p>{item.disc6}</p>
                      <p>{item.disc7}</p>
                      <p>{item.disc8}</p>
                      <p>{item.disc9}</p>
                    </div>
                  </div>
                );
              })
            : aboutData.slice(0, 1).map((item, id) => {
                return (
                  <div className=" text-[#e8d8bb]" key={id}>
                    <h2 className="text-[#ddb66a] text-3xl pb-6 font-semibold flex justify-center">
                      {item.title}
                    </h2>
                    <div className="text-lg">
                      <p>{item.disc}</p>
                      <p>{item.disc2}</p>
                      <p>{item.disc3}</p>
                      <p>{item.disc4}</p>
                      <p>{item.disc5}</p>
                      <p>{item.disc6}</p>
                      <p>{item.disc7}</p>
                      <p>{item.disc8}</p>
                      <p>{item.disc9}</p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      {/* <button
        onClick={handleExpand}
        className=" justify-self-center bg-amber-500 p-5"
      >
        {expand ? "view less" : "view more"}
      </button> */}

      <Button
        text={expand ? "View Less" : "View More"}
        onClick={handleExpand}
        textColor={"#ddb66a"}
      />
    </div>
  );
}

export default About;
