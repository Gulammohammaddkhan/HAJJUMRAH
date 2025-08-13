// import React, { useRef } from "react";
// import CustomCard from "./CustomCard";
// import { IoIosArrowDropleftCircle } from "react-icons/io";
// import { IoIosArrowDroprightCircle } from "react-icons/io";

// const Carousel = ({ data }) => {
//   const scrollRef = useRef(null);

//   const leftClick = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -370, behavior: "smooth" });
//     }
//   };
//   const rightClick = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 370, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative">
//   <div ref={scrollRef} className="w-full overflow-x-scroll no-scrollbar">
//     <div className="flex gap-x-4 px-4">
//       {data.map((item, index) => (
//         <CustomCard data={item} key={index} />
//       ))}
//     </div>
//   </div>
//       <div className="w-full absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 flex items-center justify-between">
//         <IoIosArrowDropleftCircle
//           size={36}
//           color="#ddb66a"
//           className="cursor-pointer"
//           onClick={leftClick}
//         />
//         <IoIosArrowDroprightCircle
//           size={36}
//           color="#ddb66a"
//           className="cursor-pointer"
//           onClick={rightClick}
//         />
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
import CustomCard from "./CustomCard";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Carousel = ({ data }) => {
  const [indexes, setIndexes] = useState([0, 1, 2]);

  const handleRight = () => {
    setIndexes((prev) => prev.map((elem) => (elem + 1) % data.length));
  };

  const handleLeft = () => {
    setIndexes((prev) =>
      prev.map((elem) => (elem - 1 + data.length) % data.length)
    );
  };

  return (
    <div className="relative">
      <div className="w-full overflow-x-scroll no-scrollbar">
        <div className="flex gap-x-4 px-4 justify-around">
          {indexes?.map((item, index) => (
            <CustomCard data={data[item]} key={index} />
          ))}
        </div>
      </div>
      <div className="w-full absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 flex items-center justify-between">
        <IoIosArrowDropleftCircle
          size={36}
          color="#ddb66a"
          className="cursor-pointer"
          onClick={handleLeft}
        />
        <IoIosArrowDroprightCircle
          size={36}
          color="#ddb66a"
          className="cursor-pointer"
          onClick={handleRight}
        />
      </div>
    </div>
  );
};

export default Carousel;
