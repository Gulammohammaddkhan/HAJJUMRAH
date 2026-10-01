import React from "react";
import Logo from "../Components/Logo";
import Button from "./Button";
function Brochure({ header, para }) {
  return (
    <div className="py-8 md:py-12 border-y border-[#ddb66a]/20 my-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 sm:p-8 md:p-10 bg-[#303030] rounded-2xl shadow-2xl border border-[#ddb66a]/20 text-center md:text-left">
        <div className="flex items-center justify-center shrink-0">
          <Logo />
        </div>
        <div className="flex-1 max-w-2xl">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-serif text-[#ddb66a] pb-1">
            {header}
          </h2>
          <p className="font-serif text-xs sm:text-sm md:text-base text-[#e8d8bb]/90 leading-relaxed">
            {para}
          </p>
        </div>
        <div className="shrink-0">
          <Button text={"Download Brochure"} textColor={"#ddb66a"} />
        </div>
      </div>
    </div>
  );
}

export default Brochure;
