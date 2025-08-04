import React from "react";

function Button({ text, bgColor, textColor, href, rounded }) {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  const commonClass = `${rounded} py-1 px-3 font-serif hover:scale-105 cursor-pointer`;

  return href ? (
    <Link to={href} style={styles} className={commonClass}>
      {text}
    </Link>
  ) : (
    <button style={styles} className={`${commonClass} font-semibold`}>
      {text}
    </button>
  );
}

export default Button;
