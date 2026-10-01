import { div } from "motion/react-client";
import React, { useState } from "react";
import Button from "./Button";

function About({ aboutData }) {
  const [expand, setExpand] = useState(false);
  function handleExpand() {
    setExpand((prev) => !prev);
  }

  const renderContent = (item, id) => (
    <div className="text-[#e8d8bb] pb-6" key={id}>
      <h2 className="text-[#ddb66a] text-xl sm:text-2xl md:text-3xl py-4 sm:py-6 font-semibold text-center">
        {item.title}
      </h2>
      <div className="text-sm sm:text-base md:text-lg space-y-3 leading-relaxed text-[#e8d8bb]/90">
        {item.disc && <p>{item.disc}</p>}
        {item.disc2 && <p>{item.disc2}</p>}
        {item.disc3 && <p>{item.disc3}</p>}
        {item.disc4 && <p>{item.disc4}</p>}
        {item.disc5 && <p>{item.disc5}</p>}
        {item.disc6 && <p>{item.disc6}</p>}
        {item.disc7 && <p>{item.disc7}</p>}
        {item.disc8 && <p>{item.disc8}</p>}
        {item.disc9 && <p>{item.disc9}</p>}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto py-8 md:py-12">
      <div className="flex flex-col w-full px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl custom-heading text-[#ddb66a] font-bold animate__animated animate__pulse animate__infinite text-center pb-6 md:pb-8">
          Hijrat Tours & Travels
        </h1>

        <div className="w-full">
          {expand
            ? aboutData.map((item, id) => renderContent(item, id))
            : aboutData.slice(0, 1).map((item, id) => renderContent(item, id))}
        </div>
      </div>

      <div className="mt-4">
        <Button
          text={expand ? "View Less" : "View More"}
          onClick={handleExpand}
          textColor={"#ddb66a"}
        />
      </div>
    </div>
  );
}

export default About;
