import React from "react";
import Logo from "../Components/Logo";
import Button from "./Button";
function Brochure({ header, para }) {
  return (
    <div>
      {" "}
      <div className=" py-10  border-y-1 border-y-[#e8d8bb]">
        <div className="flex justify-around items-center py-10  bg-[#303030] rounded-lg shadow-2xl">
          <div className="flex">
            <Logo />
            {/* <div className="text-[#ddb66a] font-semibold">
              <p>HIJRAT</p>
              <p>For Life</p>
            </div> */}
          </div>
          <div>
            <h2 className="text-xl font-semibold font-serif text-[#ddb66a]">
              {header}
            </h2>
            <p className=" font-serif text-[#e8d8bb]">{para}</p>
          </div>
          <div>
            <Button text={"Download Brochure"} textColor={"#ddb66a"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brochure;
