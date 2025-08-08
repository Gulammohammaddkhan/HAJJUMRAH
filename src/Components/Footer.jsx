import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer({ footerData }) {
  return (
    <div className="bg-[#303030] text-[#deb76a]">
      <div>
        <div className="flex flex-col justify-center items-center">
          <Logo />
          <h2>Hijrat Tours & Travels</h2>
          <p>
            {" "}
            We have been serving pilgrims for over 36 years, providing
            exceptional service since 1989, thanks to the vision of our founder,
            Mr. Gulam Mohammad Khan.{" "}
            <Link className="font-semibold text-[#ddb66a]" to={"/"}>
              Learn more about our journey and offerings
            </Link>{" "}
          </p>
          <h4>Follow Us</h4>
          <div>
            {footerData.map((item, id) => {
              <img src={item.imgSrc} alt="img" key={id} />;
            })}
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
