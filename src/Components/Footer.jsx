import React, { useState } from "react";
import Logo from "./Logo";
import { Link, Links } from "react-router-dom";
import { div } from "motion/react-client";

function Footer({ footerData }) {
  const links = [
    { link: "/hajjpackages", title: "hajj Packages" },
    { link: "/umrahpackages", title: "umrah Packages" },
    { link: "/ramadan", title: "Ramadan" },
    { link: "/baghdad", title: "Ziyarat" },
  ];

  const [mobile, setMobile] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting mobile number", mobile);
    setMobile("");
  }

  return (
    <div>
      <div className=" flex justify-around bg-[#303030] text-[#deb76a] py-10 px-6 font-serif footer">
        <div className=" w-[40%] flex flex-col justify-center items-center first-child">
          <Logo />
          <h2 className="text-2xl font-semibold  py-3">
            Hijrat Tours & Travels
          </h2>
          <p className=" text-lg text-[#e8d8bb] pb-3">
            We have been serving pilgrims for over 36 years, providing
            exceptional service since 1989, thanks to the vision of our founder,
            Mr. Gulam Mohammad Khan.{" "}
            <Link
              className="font-semibold text-[#ddb66a] transform transition duration-300 ease-in-out hover:scale-110"
              to={"/"}
            >
              Learn more about our journey and offerings
            </Link>{" "}
          </p>
          <h4 className="text-xl pb-3 font-semibold">Follow Us</h4>
          <div className="flex gap-3 footer-img">
            {footerData.map((item, id) => {
              return (
                <img
                  src={item.imgSrc}
                  alt="img"
                  key={id}
                  className="transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                />
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold pb-3">Packages</h2>
          <div className="text-[#e8d8bb]  text-lg">
            {links.map((item, index) => {
              return (
                <div
                  key={index}
                  className="pt-2 transform transition duration-300 ease-in-out hover:scale-110 "
                >
                  <Link to={item.link}>{item.title}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold pb-3">
            Hijrat Tours & Travels
          </h2>
          <p className="text-lg pb-3 text-[#e8d8bb]">
            would love your feedback. Post a review to our profile.
          </p>
          <h4 className="text-lg pb-3 text-[#e8d8bb]">Newsletter</h4>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <input
                className="text-[#e8d8bb] border-1 rounded-sm overflow-hidden outline-none"
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />{" "}
              <button
                type="submit"
                className=" px-4 py-2 font-semibold rounded-sm bg-[#ddb66a] text-black hover:scale-105 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#303030] py-12">
        <div className="mx-10 border-t-1 border-t-[#ddb66a] flex justify-end pt-6">
          <Link className="border-r-1 border-r-[#ddb66a] px-2 text-[#e8d8bb]">
            Privacy Policy
          </Link>
          <p className="px-2 text-[#e8d8bb]">
            ©2024 Copyright Hijrat Tours & Travels Pvt. Ltd. 2020. All Right
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
