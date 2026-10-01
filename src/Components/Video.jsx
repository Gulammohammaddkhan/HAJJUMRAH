import React from "react";
import { Link } from "react-router-dom";
import perfromUmrah from "../Images/perfromUmrah.jpg";
import { videoData } from "../../data/Data";
import { div } from "motion/react-client";

function Video({ videoData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full pb-6">
      {videoData.map((item, index) => (
        <div
          key={index}
          className="group relative w-full max-w-[350px] h-[200px] rounded-xl overflow-hidden shadow-lg border border-[#ddb66a]/30 hover:shadow-[#ddb66a]/20 transition-all duration-300"
          style={{
            backgroundImage: `url("${item.imgSrc}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link
            to={item.path}
            target="_blank"
            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center"
          >
            <p className="text-base sm:text-lg text-[#ddb66a] font-bold">
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
