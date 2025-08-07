import React from "react";
import { Link } from "react-router-dom";
import madinaimg from "../Images/madinaImg.jpg";

function Help() {
  return (
    <div className="text-[#ddb66a] flex gap-6 mx-10 py-16">
      <div className=" w-[70%] flex flex-col justify-center items-center gap-4 ">
        <h2 className="text-3xl font-semibold ">Media About Us</h2>
        <div>
          <img src={madinaimg} alt="img" className="" />
        </div>
        <p className="text-xl text-[#e8d8bb]">
          Legacy of Trust, Journey of Faith, "Your Better Pilgrimage Begins with
          Hijrat".
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-semibold ">How Can We Help?</h2>
        <p className="text-xl text-[#e8d8bb]">
          {" "}
          Whether you're looking to book a pilgrimage, have questions about
          packages, or need assistance — we're here to guide you every step of
          the way.{" "}
        </p>
        <div className="px-20 w-full py-8 bg-[#313131] text-[#e8d8bb] ">
          <form action="post" className="flex flex-col w-full  gap-4">
            <input type="text" placeholder="name" className="border-2 " />
            <input
              type="number"
              placeholder="Mobile number*"
              className="border-2 "
            />
            <input type="mail" placeholder="Your Email" className="border-2 " />
            <div className="w-full">
              <select name="packages" id="" className="w-full border-2 ">
                <option value="hajj" className="bg-[#313131]">
                  Hajj
                </option>
                <option value="umrah" className="bg-[#313131]">
                  Umrah
                </option>
                <option value="ziyarat" className="bg-[#313131]">
                  Ziyarat
                </option>
                <option value="ramadan" className="bg-[#313131]">
                  Ramadan
                </option>
                <option value="others" className="bg-[#313131]">
                  Others
                </option>
              </select>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">
                I accept the{" "}
                <Link to={"/"} className="text-[#ddb66a]">
                  Privacy Policy.
                </Link>
              </label>
            </div>
            <button type="submit" className="w-full bg-[#ddb66a] text-black">
              send inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;
