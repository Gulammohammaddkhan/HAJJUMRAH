import React, { useState } from "react";
import { faqData } from "../../data/Data";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const Faq = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleFAQToggle = (index) => {
    setCurrentIndex(currentIndex === index ? null : index);
  };

  if (!data || data.length === 0) return null;

  return (
    <div className="flex justify-center py-8 md:py-14 w-full">
      <div className="w-full max-w-3xl bg-[#303030] rounded-2xl shadow-xl border border-[#ddb66a]/20 px-4 sm:px-8 py-6 sm:py-8">
        <div className="text-white w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-[#ddb66a]">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            {data.map((item, index) => {
              const isOpen = currentIndex === index;

              return (
                <li
                  key={item.title}
                  className="border border-[#ddb66a]/40 rounded-xl overflow-hidden bg-[#1a1a1a] shadow-md hover:shadow-[#ddb66a]/20 transition"
                >
                  <button
                    onClick={() => handleFAQToggle(index)}
                    className="w-full flex items-center justify-between p-3.5 sm:p-4 focus:outline-none text-left gap-2 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm md:text-base text-[#e8d8bb] font-medium">
                      {item.title}
                    </span>
                    <span className="shrink-0 text-[#ddb66a]">
                      {isOpen ? (
                        <FaMinus size={16} />
                      ) : (
                        <FiPlus size={16} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[800px] p-3.5 sm:p-4 pt-0" : "max-h-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-[#ebd3a6]/90 leading-relaxed mb-1">
                      {item.para}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
