import React, { useState } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/Data";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="fixed w-full bg-black z-50 text-[#ddb66a]  flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2 transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <Logo />
          <div className="tracking-tight leading-none">
            <p>HIJRAT</p>
            <p>For Life</p>
          </div>
        </div>
        <div className={`flex items-center gap-5 max-lg:hidden`}>
          {navLinks?.map((link) => {
            return (
              <NavLink
                key={link.title}
                to={link.path}
                className="transform transition duration-300 ease-in-out hover:scale-110"
              >
                {link.title}
              </NavLink>
            );
          })}
        </div>
        <GiHamburgerMenu
          className="lg:hidden transform transition duration-300 ease-in-out hover:scale-110"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      {toggle && (
        <div
          className={`flex items-center gap-3 flex-col bg-black text-[#ddb66a] py-3 lg:hidden`}
        >
          {navLinks?.map((link) => {
            return (
              <NavLink
                key={link.title}
                to={link.path}
                className="transform transition duration-300 ease-in-out hover:scale-110"
              >
                {link.title}
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Header;
