import React, { useState } from "react";
import { detailData } from "../../data/Data";
import Button from "./Button";

function Detail() {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand((prev) => !prev);
  }

  const renderItem = (item, index) => (
    <div key={index} className="pb-6">
      <h2 className="text-[#ddb66a] text-xl sm:text-2xl md:text-3xl font-semibold font-serif pb-3 text-center sm:text-left">
        {item.title}
      </h2>
      <p className="text-[#e8d8bb]/90 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
        {item.disc}
      </p>
    </div>
  );

  return (
    <div className="border-y border-[#ddb66a]/20 pt-8 md:pt-14 pb-8 my-6 w-full">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        {expand
          ? detailData.map((item, index) => renderItem(item, index))
          : detailData.slice(0, 1).map((item, index) => renderItem(item, index))}

        <div className="flex justify-center mt-4">
          <Button
            onClick={handleExpand}
            text={expand ? "View Less" : "View More"}
            textColor={"#ddb66a"}
          />
        </div>
      </div>
    </div>
  );
}

export default Detail;
