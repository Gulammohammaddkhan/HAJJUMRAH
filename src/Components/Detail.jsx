import React from "react";
import { detailData } from "../../data/Data";

function Detail() {
  return (
    <div className="border-y-1 border-y-[#e8d8bb]  pt-20">
      {detailData.map((item, index) => {
        return (
          <div key={index} className="px-10 ">
            <h2 className="text-[#ddb66a] text-3xl font-semibold font-serif pb-4 ">
              {item.title}
            </h2>
            <p className="text-[#e8d8bb] text-lg pb-8">{item.disc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Detail;
