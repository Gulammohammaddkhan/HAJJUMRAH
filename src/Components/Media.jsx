import React from "react";
import Video from "./Video";
import { videoData } from "../../data/Data";
import Button from "./Button";

function Media() {
  return (
    <div className="flex flex-col py-20 text-[#ddb66a] ">
      <h2 className="text-[#ddb66a] self-center py-8 font-bold font-serif text-3xl  animate__animated animate__pulse animate__infinite items-center">
        MEDIA
      </h2>
      <Video videoData={videoData} />
      <Button text={"View All"} />
    </div>
  );
}

export default Media;
