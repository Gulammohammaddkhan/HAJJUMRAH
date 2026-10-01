import { div } from "motion/react-client";
import React from "react";

function Partners({ partnersData }) {
  return (
    <div className="border-t border-[#303030] py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14 filter grayscale hover:grayscale-0 transition-all duration-500">
        {partnersData.map((item, index) => {
          return (
            <div className="partner flex items-center justify-center p-2" key={index}>
              <img
                src={item.imgSrc}
                alt="Partner logo"
                className="w-12 sm:w-16 md:w-20 max-h-16 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Partners;
