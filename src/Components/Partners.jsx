import { div } from "motion/react-client";
import React from "react";

function Partners({ partnersData }) {
  return (
    <div className="flex flex-wrap justify-around items-center gap-10 py-10 filter grayscale border-t-1 border-t-[#303030] ">
      {partnersData.map((item, index) => {
        return (
          <div className="partner" key={index}>
            <img
              src={item.imgSrc}
              alt=" partners-img"
              className="min-w-[50px] max-w-[80px] min-h-[72px]"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Partners;
