import React from "react";
import { Link } from "react-router-dom";
import perfromUmrah from "../Images/perfromUmrah.jpg";
import { videoData } from "../../data/Data";
import { div } from "motion/react-client";

function Video({ videoData }) {
  return (
    <div className="flex justify-around pb-6">
      {videoData.map((item, index) => (
        <div
          key={index}
          className="group relative performUmrah"
          style={{
            background: `url("${item.imgSrc}")`,
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <Link
            to={item.path}
            target="_blank"
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p className="text-lg  text-[#ddb66a] font-bold  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.text}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Video;

// <div className="flex justify-around">
//   {videoData.map((item, index) => {
//     return (
//       <div key={index}>
//         <Link
//           to={item.path}
//           target="_blank"
//           className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         >
//           <p className="text-lg font-bold ">{item.text}</p>
//         </Link>
//       </div>
//     );
//   })}
// </div>
