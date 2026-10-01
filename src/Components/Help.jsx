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
    <div className="text-[#ddb66a] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
      {/* Media About Us Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
          Media About Us
        </h2>
        <div className="relative w-full max-w-xl px-2 sm:px-0">
          <div className="w-full h-[280px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#ddb66a]/30">
            <img
              src={helpImg[current]}
              alt="Media about Hijrat"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-5 z-20 bg-black/80 hover:bg-black text-[#ddb66a] hover:text-[#e0c692] p-1 sm:p-1.5 rounded-full shadow-xl border border-[#ddb66a]/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <IoIosArrowDropleftCircle size={36} />
          </button>
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 z-20 bg-black/80 hover:bg-black text-[#ddb66a] hover:text-[#e0c692] p-1 sm:p-1.5 rounded-full shadow-xl border border-[#ddb66a]/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <IoIosArrowDroprightCircle size={36} />
          </button>
        </div>
        <p className="text-base sm:text-lg text-[#e8d8bb] max-w-lg italic mt-2">
          Legacy of Trust, Journey of Faith, "Your Better Pilgrimage Begins with Hijrat".
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-4 max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-center">
          How Can We Help?
        </h2>
        <div className="w-full px-4 sm:px-8 py-6 sm:py-8 bg-[#313131] text-[#e8d8bb] rounded-xl shadow-xl border border-[#ddb66a]/30">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 bg-[#242424] text-[#e8d8bb] outline-none rounded-lg border border-[#ddb66a]/30 focus:border-[#ddb66a] focus:ring-1 focus:ring-[#ddb66a] transition"
              value={contact.name}
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Mobile number*"
              className="p-3 bg-[#242424] text-[#e8d8bb] outline-none rounded-lg border border-[#ddb66a]/30 focus:border-[#ddb66a] focus:ring-1 focus:ring-[#ddb66a] transition"
              value={contact.phone}
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              type="email"
              name="mail"
              placeholder="Your Email"
              className="p-3 bg-[#242424] text-[#e8d8bb] outline-none rounded-lg border border-[#ddb66a]/30 focus:border-[#ddb66a] focus:ring-1 focus:ring-[#ddb66a] transition"
              value={contact.mail}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="w-full">
              <select
                name="packages"
                className="p-3 w-full bg-[#242424] text-[#e8d8bb] outline-none rounded-lg border border-[#ddb66a]/30 focus:border-[#ddb66a] focus:ring-1 focus:ring-[#ddb66a] transition"
                value={contact.packages}
                onChange={(e) => handleChange(e)}
              >
                <option value="hajj">Hajj</option>
                <option value="umrah">Umrah</option>
                <option value="ziyarat">Ziyarat</option>
                <option value="ramadan">Ramadan</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <input type="checkbox" id="privacy" className="accent-[#ddb66a] cursor-pointer" required />
              <label htmlFor="privacy" className="cursor-pointer text-[#e8d8bb]">
                I accept the{" "}
                <Link to={"/"} className="text-[#ddb66a] underline">
                  Privacy Policy.
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#ddb66a] to-[#c9a256] text-black rounded-lg font-bold cursor-pointer hover:shadow-lg hover:shadow-[#ddb66a]/30 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wider text-sm mt-2"
            >
              Send Inquiry
            </button>
          </form>
        </div>
        <p className="text-xs sm:text-sm text-[#e8d8bb]/80 text-center max-w-md">
          Whether you're looking to book a pilgrimage, have questions about packages, or need assistance — we're here to guide you every step of the way.
        </p>
      </div>
    </div>
  );
}

export default Help;
