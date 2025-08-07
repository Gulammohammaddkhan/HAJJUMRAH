import React from "react";

function Button({ text, bgColor, textColor, href, rounded, onClick }) {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  const commonClass = `${rounded} py-1 px-3  hover:scale-105 cursor-pointer`;

  return href ? (
    <Link to={href} style={styles} className={commonClass}>
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick && onClick}
      style={styles}
      className={`${commonClass} font-semibold`}
    >
      {text}
    </button>
  );
}

export default Button;
