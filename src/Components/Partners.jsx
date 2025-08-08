import { div } from "motion/react-client";
import React from "react";

function Partners({ partnersData }) {
  return (
    <div className="flex justify-center items-center gap-10 py-10 filter grayscale border-t-1 border-t-[#303030] ">
      {partnersData.map((item, id) => {
        return (
          <div className="">
            <img src={item.imgSrc} alt=" partners-img" className="" />
          </div>
        );
      })}
    </div>
  );
}

export default Partners;
