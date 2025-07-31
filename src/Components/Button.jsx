import React from "react";
import { Link } from "react-router-dom";

function Button({ text, bgColor, textColor, href, rounded }) {
  return (
    <>
      {href ? (
        <Link
          to={href}
          className={`text-[${textColor}] bg-[${bgColor}] py-1 px-3 ${rounded} font-serif  hover:scale-105`}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`bg-[${bgColor}] text-[${textColor}] font-serif font-semibold cursor-pointer py-1 px-3 rounded-sm hover:scale-105`}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
