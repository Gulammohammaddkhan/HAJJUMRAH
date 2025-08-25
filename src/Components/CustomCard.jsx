import React from "react";
import Button from "./Button";

function CustomCard({ data }) {
  return (
    <div className="min-w-[350px] max-w-[370px] h-auto flex-shrink-0 text-[#e8d8bb] rounded-xl cursor-pointer border border-[#ddb66a]/30 overflow-hidden bg-[#1a1a1a] hover:shadow-lg hover:shadow-[#ddb66a]/20 transition-all duration-300 hover:-translate-y-1 group flex flex-col">
      {/* Image with overlay effect */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={data?.img}
          alt={data?.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-white font-medium text-lg">{data?.days}</span>
        </div>
      </div>

      {/* Card content */}
      <div className="flex-1 flex flex-col p-4">
        <h2 className="text-xl text-[#ddb66a] font-bold text-center mb-3">
          {data?.title}
        </h2>

        <div className="space-y-3 mb-4">
          {data?.hotels?.map((hotel, index) => (
            <div key={index} className="bg-[#222222] p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="bg-[#ddb66a]/10 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#ddb66a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="flex items-center">
                  <span className=" flex gap-2 items-center">
                    <p className="font-bold text-[#ddb66a]">{hotel.moullim}</p>
                    <p className="text-[#e8d8bb] text-sm">{hotel.category}</p>
                  </span>
                  <p className="text-[#e8d8bb] text-xs mt-1">
                    <span className="text-[#ddb66a]">
                      {hotel.hotelLocation}
                    </span>{" "}
                    · {hotel.hotelName}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-3">
            {data?.departure && (
              <div className="bg-[#222222] p-3 rounded-lg">
                <p className="font-semibold text-xs text-[#ddb66a] mb-1">
                  Departure
                </p>
                <p className="text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#ddb66a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {data?.departure}
                </p>
              </div>
            )}

            <div className="bg-[#222222] p-3 rounded-lg">
              <p className="font-semibold text-xs text-[#ddb66a] mb-1">Rate</p>
              <p className="text-[#ddb66a] font-bold flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {data?.rate} <p className="text-[#e8d8bb] ">/ head</p>
              </p>
            </div>
          </div>
        </div>

        {/* Footer with CTA buttons - will always appear at bottom */}
        <div className="mt-auto pt-3 border-t border-[#333]">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="hover:underline text-sm text-[#ddb66a] hover:text-[#e8d8bb] transition-colors duration-200 flex items-center"
            >
              Read details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <Button
              text="Book now"
              className="bg-gradient-to-r from-[#ddb66a] to-[#c9a256] hover:from-[rgb(201,162,86)] hover:to-[#ddb66a] text-[#1a1a1a] font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-[#ddb66a]/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
