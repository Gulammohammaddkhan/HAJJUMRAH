import React from "react";
import building from "../Images/building.png";
import pedestrianCrossing from "../Images/pedestrianCrossing.png";
import madina from "../Images/madina.png";
import { MdElderlyWoman } from "react-icons/md";

function Logo() {
  return (
    <div>
      <div className="w-24 flex items-baseline">
        <img src={building} alt="" className="w-8 h-8" />
        <div className="flex flex-col justify-center items-center ">
          <MdElderlyWoman className="text-[#ddb66a]" />
          <img src={pedestrianCrossing} alt="" className="w-6 h-3 mt-[-7px]" />
        </div>

        <img src={madina} alt="" className="w-8 h-8" />
      </div>
    </div>
  );
}

export default Logo;
