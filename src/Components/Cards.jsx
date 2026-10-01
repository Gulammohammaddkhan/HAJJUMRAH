import React from "react";
import { hajjPackagesCardData } from "../../data/Data";
import { div } from "motion/react-client";

function Cards({ hajjPackagesCardData }) {
  return (
    <div className="pb-8 md:pb-14 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#ddb66a] text-center pt-10 md:pt-16 font-bold px-2">
        Why Choose Hijrat Tours & Travels Pvt Ltd
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-8 md:py-12 justify-items-center">
        {hajjPackagesCardData.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#303030] w-full max-w-[350px] p-6 rounded-xl cursor-pointer border border-[#ddb66a]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(221,182,106,0.4)] flex flex-col items-center text-center"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-[#ddb66a] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#e8d8bb]/90 leading-relaxed">
                {item.para}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
