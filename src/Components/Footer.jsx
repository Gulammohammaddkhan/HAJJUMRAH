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
    <footer className="bg-[#242424] text-[#deb76a] font-serif border-t border-[#ddb66a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Info - spans 5 cols on lg */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="mb-2">
              <Logo />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold py-2 text-[#ddb66a]">
              Hijrat Tours & Travels
            </h2>
            <p className="text-sm sm:text-base text-[#e8d8bb]/90 pb-4 leading-relaxed max-w-md">
              We have been serving pilgrims for over 36 years, providing
              exceptional service since 1989, thanks to the vision of our founder,
              Mr. Gulam Mohammad Khan.{" "}
              <Link
                className="font-semibold text-[#ddb66a] underline hover:text-[#e0c692] transition-colors block mt-2"
                to={"/"}
              >
                Learn more about our journey and offerings
              </Link>
            </p>
            <h4 className="text-base sm:text-lg font-semibold pb-2 text-[#ddb66a]">
              Follow Us
            </h4>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2.5">
              {footerData.map((item, id) => {
                return (
                  <img
                    src={item.imgSrc}
                    alt="Social link"
                    key={id}
                    className="w-8 h-8 rounded-full object-contain transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  />
                );
              })}
            </div>
          </div>

          {/* Quick Links - spans 3 cols on lg */}
          <div className="lg:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-xl font-bold pb-4 text-[#ddb66a] border-b border-[#ddb66a]/20 w-full sm:w-auto">
              Our Packages
            </h2>
            <div className="text-[#e8d8bb] text-sm sm:text-base space-y-3 pt-2">
              {links.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="transform transition duration-300 ease-in-out hover:translate-x-1"
                  >
                    <Link
                      to={item.link}
                      className="hover:text-[#ddb66a] capitalize transition-colors"
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Newsletter / Contact - spans 4 cols on lg */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-xl font-bold pb-2 text-[#ddb66a]">
              Connect With Us
            </h2>
            <p className="text-sm text-[#e8d8bb]/90 pb-4 max-w-sm">
              We would love your feedback. Post a review or subscribe for our latest tour schedules.
            </p>
            <h4 className="text-base font-semibold pb-2 text-[#ddb66a]">
              Newsletter
            </h4>
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  className="flex-1 bg-[#1a1a1a] text-[#e8d8bb] border border-[#ddb66a]/30 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#ddb66a] transition"
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2 font-bold rounded-lg bg-gradient-to-r from-[#ddb66a] to-[#c9a256] text-black hover:shadow-md hover:shadow-[#ddb66a]/30 hover:scale-105 active:scale-95 cursor-pointer text-sm transition-all shrink-0"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-10 pt-6 border-t border-[#ddb66a]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#e8d8bb]/80 text-center sm:text-left">
          <p>© 2026 Hijrat Tours & Travels Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-[#ddb66a] underline transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/" className="hover:text-[#ddb66a] underline transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
