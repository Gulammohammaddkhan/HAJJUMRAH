import React, { useState } from "react";
import { Link } from "react-router-dom";
import madinaimg from "../Images/madinaImg.jpg";
import tawaf from "../Images/tawaf.jpg";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

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

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    mail: "",
    packages: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  console.log(contact);

  function handleSubmit(e) {
    e.preventDefault();
    setContact({
      name: "",
      phone: "",
      mail: "",
      packages: "",
    });
  }

  return (
    <div className="text-[#ddb66a] flex justify-center items-center  gap-6 mx-10 py-16 help">
      <div className=" w-[70%] flex flex-col justify-center items-center gap-4  ">
        <h2 className="text-3xl font-semibold ">Media About Us</h2>
        <div className="relative">
          <img
            src={helpImg[current]}
            alt="img"
            className="relative rounded-lg"
          />
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
        {/* <p className="text-xl text-[#e8d8bb]">
          {" "}
          Whether you're looking to book a pilgrimage, have questions about
          packages, or need assistance — we're here to guide you every step of
          the way.{" "}
        </p> */}
        <div className="px-20 w-full py-8 bg-[#313131] text-[#e8d8bb] rounded-md">
          <form
            onSubmit={handleSubmit}
            action="post"
            className="flex flex-col w-full  gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className=" p-2 overflow-hidden outline-none rounded-sm border-1 focus:border-[#e8d8bb] focus:ring-1 "
              value={contact.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Mobile number*"
              className=" p-2 overflow-hidden outline-none rounded-sm border-1 focus:border-[#e8d8bb] focus:ring-1 "
              value={contact.phone}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="mail"
              name="mail"
              placeholder="Your Email"
              className=" p-2 overflow-hidden outline-none rounded-sm border-1 focus:border-[#e8d8bb] focus:ring-1 "
              value={contact.mail}
              onChange={(e) => handleChange(e)}
            />
            <div className="w-full">
              <select
                name="packages"
                id=""
                className=" p-2 w-full overflow-hidden outline-none rounded-sm border-1 focus:border-[#e8d8bb] focus:ring-1 "
                value={contact.packages}
                onChange={(e) => handleChange(e)}
              >
                <option value="hajj" className="bg-[#313131] ">
                  Hajj
                </option>
                <option value="umrah" className="bg-[#313131] ">
                  Umrah
                </option>
                <option value="ziyarat" className="bg-[#313131]">
                  Ziyarat
                </option>
                <option value="ramadan" className="bg-[#313131] ">
                  Ramadan
                </option>
                <option value="others" className="bg-[#313131] ">
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
            <button
              type="submit"
              className="w-full p-1 bg-[#ddb66a] text-black rounded-sm font-semibold cursor-pointer hover:scale-105 transition-all ease-in-out"
            >
              send inquiry
            </button>
          </form>
        </div>
        <p className="text-xl text-[#e8d8bb] helper-text">
          {" "}
          Whether you're looking to book a pilgrimage, have questions about
          packages, or need assistance — we're here to guide you every step of
          the way.{" "}
        </p>
      </div>
    </div>
  );
}

export default Help;
