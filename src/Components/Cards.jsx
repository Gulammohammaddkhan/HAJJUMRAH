import React from "react";
import { hajjPackagesCardData } from "../../data/Data";
import { div } from "motion/react-client";

function Cards({ hajjPackagesCardData }) {
  return (
    <div>
      <h2 className="text-3xl text-[#ddb66a] flex justify-center items-center pt-14">
        Why Choose Hijrat Tours & Travels Pvt Ltd
      </h2>
      <div className="grid grid-cols-3 gap-8 py-10 ">
        {hajjPackagesCardData.map((item, index) => {
          return (
            <div className=" bg-[#303030] w-[350px]  px-4 py-6 rounded-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_4px_20px_rgba(221,182,106,0.6)]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={item.imgSrc}
                  className="text-[#ddb66a] w-[70px] h-[70px] pb-3 "
                />
                <h2 className="text-[#ddb66a] pb-2">{item.title}</h2>
                <p className="text-[#e8d8bb] self-center">{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
