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

import React, { useState, useEffect } from "react";
import CustomCard from "./CustomCard";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Carousel = ({ data = [] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsCount, setCardsCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsCount(1);
      } else if (window.innerWidth < 1024) {
        setCardsCount(2);
      } else {
        setCardsCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data || data.length === 0) return null;

  const handleRight = () => {
    setStartIndex((prev) => (prev + 1) % data.length);
  };

  const handleLeft = () => {
    setStartIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const visibleCards = Array.from(
    { length: Math.min(cardsCount, data.length) },
    (_, i) => (startIndex + i) % data.length
  );

  return (
    <div className="relative w-full px-2 sm:px-6 md:px-10">
      <div className="w-full flex justify-center items-stretch gap-4 sm:gap-6 overflow-hidden py-2">
        {visibleCards.map((itemIndex, idx) => (
          <div
            key={`${itemIndex}-${idx}`}
            className="w-full max-w-[370px] flex flex-col h-full transition-all duration-300"
          >
            <CustomCard data={data[itemIndex]} />
          </div>
        ))}
      </div>

      {data.length > 1 && (
        <div className="w-full absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-between px-1 pointer-events-none z-10">
          <button
            onClick={handleLeft}
            className="pointer-events-auto bg-black/60 rounded-full p-1 hover:scale-110 active:scale-95 transition-all text-[#ddb66a] hover:text-[#e0c692]"
            aria-label="Previous slide"
          >
            <IoIosArrowDropleftCircle size={36} />
          </button>
          <button
            onClick={handleRight}
            className="pointer-events-auto bg-black/60 rounded-full p-1 hover:scale-110 active:scale-95 transition-all text-[#ddb66a] hover:text-[#e0c692]"
            aria-label="Next slide"
          >
            <IoIosArrowDroprightCircle size={36} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
