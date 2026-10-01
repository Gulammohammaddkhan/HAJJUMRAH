import React from "react";
import Video from "./Video";
import { videoData } from "../../data/Data";
import Button from "./Button";

function Media() {
  return (
    <div className="flex flex-col py-10 md:py-16 text-[#ddb66a] w-full">
      <h2 className="text-[#ddb66a] text-center py-6 md:py-8 font-bold custom-heading text-2xl sm:text-3xl animate__animated animate__pulse animate__infinite tracking-wider">
        MEDIA
      </h2>
      <Video videoData={videoData} />
    </div>
  );
}

export default Media;
