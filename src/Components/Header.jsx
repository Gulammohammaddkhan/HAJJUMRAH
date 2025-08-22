import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/Data";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "py-2 bg-black/95 shadow-lg" : "py-4 bg-black/80"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setToggle(false)}
          >
            <Logo />
            {/* <div className="leading-tight font-semibold">
              <p className="text-[#ddb66a]">HIJRAT</p>
              <p className="text-[#ddb66a] text-sm">For Life</p>
            </div> */}
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks?.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-[#ddb66a] hover:text-[#e0c692] hover:scale-110 transition-all ease-in-out font-medium  ${
                    isActive ? "text-[#e0c692]" : ""
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setToggle((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {toggle ? (
              <IoClose className="text-2xl text-[#ddb66a]" />
            ) : (
              <GiHamburgerMenu className="text-xl text-[#ddb66a]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="lg:hidden bg-black/95 px-4 py-5">
            <nav className="flex flex-col gap-4">
              {navLinks?.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded text-[#ddb66a] hover:text-[#e0c692] transition ${
                      isActive ? "bg-[#ddb66a]/20 text-[#e0c692]" : ""
                    }`
                  }
                  onClick={() => setToggle(false)}
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
