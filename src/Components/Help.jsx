import React, { useState } from "react";
import { Link } from "react-router-dom";
import madinaimg from "../Images/madinaImg.jpg";
import tawaf from "../Images/tawaf.jpg";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { div } from "motion/react-client";

function Help() {
  const helpImg = [tawaf, madinaimg];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % helpImg.length);
  };
  function prevSlide() {
    setCurrent((prev) => (prev - 1 + helpImg.length) % helpImg.length);
  }
  // function carosel() {
  //   const nextSlide = () => {
  //     setCurrent((prev) => (prev + 1) % helpImg.length);
  //   };
  //   const prevSlide = () => {
  //     setCurrent((prev) => (prev - 1 + helpImg.length) % helpImg.length);
  //   };
  //   function prevSlide() {
  //     setCurrent((prev) => (prev - 1 + helpImg.length) % helpImg.length);
  //   }
  // }
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [dropDown, setDropDown] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setNumber("");
    setMail("");
    setDropDown("");
  }

  return (
    <div className="text-[#ddb66a] flex  gap-6 mx-10 py-16">
      <div className=" w-[70%] flex flex-col justify-center items-center gap-4 ">
        <h2 className="text-3xl font-semibold ">Media About Us</h2>
        <div className="relative">
          <img src={helpImg[current]} alt="img" className="relative" />
          <div className="absolute top-[40%] left-[-17px] ">
            <IoIosArrowDropleftCircle
              size={36}
              color="#ddb66a"
              className="cursor-pointer"
              onClick={prevSlide}
            />
          </div>
          <div className="absolute top-[40%] right-[-17px] ">
            <IoIosArrowDroprightCircle
              size={36}
              color="#ddb66a"
              className="cursor-pointer"
              onClick={nextSlide}
            />
          </div>
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
          <form
            onSubmit={handleSubmit}
            action="post"
            className="flex flex-col w-full  gap-4"
          >
            <input
              type="text"
              placeholder="name"
              className="border-2 overflow-hidden outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile number*"
              className="border-2 overflow-hidden outline-none "
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="mail"
              placeholder="Your Email"
              className="border-2 overflow-hidden outline-none "
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <div className="w-full">
              <select
                name="packages"
                id=""
                className="w-full border-2 "
                value={dropDown}
                onChange={(e) => setDropDown(e.target.value)}
              >
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
