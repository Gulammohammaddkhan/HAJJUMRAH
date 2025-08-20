import React, { useState } from "react";
import { faqData } from "../../data/Data";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const Faq = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleFAQToggle = (index) => {
    setCurrentIndex(currentIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center py-10">
      {/* Background box with +50px padding */}
      <div className="bg-[#303030] rounded-xl shadow-lg inline-block px-12 py-8">
        <div className="max-w-2xl text-white">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#ddb66a]">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-4">
            {data.map((item, index) => {
              const isOpen = currentIndex === index;

              return (
                <li
                  key={item.title}
                  className="border border-[#ddb66a]/40 rounded-xl overflow-hidden bg-[#1a1a1a] shadow-md hover:shadow-[#ddb66a]/20 transition"
                >
                  <button
                    onClick={() => handleFAQToggle(index)}
                    className="w-full flex items-center justify-between p-4 focus:outline-none"
                  >
                    <span className="text-sm text-[#e8d8bb] font-medium">
                      {item.title}
                    </span>
                    {isOpen ? (
                      <FaMinus size={18} className="text-[#e8d8bb]" />
                    ) : (
                      <FiPlus size={18} className="text-[#e8d8bb]" />
                    )}
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[800px] p-4 pt-0" : "max-h-0"
                    } `}
                  >
                    <p
                      key={index}
                      className="text-sm text-[#ebd3a6] leading-relaxed mb-2"
                    >
                      {item.para}
                    </p>
                  </div>
                  {/* */}
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
