import React from "react";
import Button from "./Button";

function CustomCard({ data }) {
  return (
    <div className="w-full max-w-[370px] mx-auto h-[570px] flex flex-col text-[#e8d8bb] rounded-xl cursor-pointer border border-[#ddb66a]/30 overflow-hidden bg-[#1a1a1a] hover:shadow-lg hover:shadow-[#ddb66a]/20 transition-all duration-300 hover:-translate-y-1 group shrink-0">
      {/* Image with overlay effect */}
      <div className="relative h-[185px] shrink-0 overflow-hidden">
        <img
          src={data?.img}
          alt={data?.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
          <span className="text-white font-medium text-base sm:text-lg">
            {data?.days}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="flex-1 flex flex-col p-3.5 sm:p-4 justify-between overflow-hidden">
        {/* Title with uniform 2-line fixed height */}
        <h2 className="text-base sm:text-lg text-[#ddb66a] font-bold text-center h-14 flex items-center justify-center line-clamp-2 px-1 shrink-0 mb-2">
          {data?.title}
        </h2>

        {/* Hotels section with fixed height so departure & rate always align */}
        <div className="h-[180px] overflow-y-auto no-scrollbar space-y-2 mb-2 flex flex-col justify-start shrink-0">
          {data?.hotels?.map((hotel, index) => (
            <div key={index} className="bg-[#222222] p-2 rounded-lg shrink-0">
              <div className="flex items-start gap-2">
                <div className="bg-[#ddb66a]/10 p-1 rounded-full shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-[#ddb66a]"
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
                <div className="flex-1 min-w-0">
                  {hotel.moullim ? (
                    <>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <p className="font-bold text-[#ddb66a] text-xs sm:text-sm">
                          {hotel.moullim}
                        </p>
                        <p className="text-[#e8d8bb] text-xs">{hotel.category}</p>
                      </div>
                      <p className="text-[#e8d8bb] text-xs mt-0.5 truncate">
                        <span className="text-[#ddb66a]">{hotel.hotelLocation}</span> · {hotel.hotelName}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-[#ddb66a] text-xs sm:text-sm truncate">
                        {hotel.hotelLocation}
                      </p>
                      <p className="text-[#e8d8bb] text-xs mt-0.5 truncate">
                        {hotel.hotelName}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Departure & Rate */}
        <div className="grid grid-cols-2 gap-2 shrink-0 mb-2">
          {data?.departure && (
            <div className="bg-[#222222] p-2.5 rounded-lg flex flex-col justify-center">
              <p className="font-semibold text-xs text-[#ddb66a] mb-0.5">
                Departure
              </p>
              <p className="text-xs sm:text-sm flex items-center gap-1 truncate text-[#e8d8bb]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 text-[#ddb66a] shrink-0"
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
                <span className="truncate">{data?.departure}</span>
              </p>
            </div>
          )}

          <div
            className={`bg-[#222222] p-2.5 rounded-lg flex flex-col justify-center ${
              !data?.departure ? "col-span-2" : ""
            }`}
          >
            <p className="font-semibold text-xs text-[#ddb66a] mb-0.5">Rate</p>
            <p className="text-[#ddb66a] font-bold text-xs sm:text-sm flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 shrink-0"
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
              <span>{data?.rate}</span>
              <span className="text-[#e8d8bb] text-xs font-normal">/ head</span>
            </p>
          </div>
        </div>

        {/* Footer with CTA buttons */}
        <div className="pt-2.5 border-t border-[#333] shrink-0">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="hover:underline text-xs sm:text-sm text-[#ddb66a] hover:text-[#e8d8bb] transition-colors duration-200 flex items-center"
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
              className="bg-gradient-to-r from-[#ddb66a] to-[#c9a256] hover:from-[rgb(201,162,86)] hover:to-[#ddb66a] text-[#1a1a1a] font-bold py-1.5 px-3.5 rounded-lg text-xs sm:text-sm transition-all duration-200 hover:shadow-md hover:shadow-[#ddb66a]/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
