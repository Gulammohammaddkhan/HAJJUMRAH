import React from "react";
import Button from "./Button";

function CustomCard({ data }) {
  return (
    <div className="min-w-[350px] max-w-[370px] h-[650px] flex-shrink-0  text-[#e8d8bb] rounded-md cursor-pointer border border-[#ddb66a] overflow-hidden bg-[#1a1a1a]">
      <img
        src={data?.img}
        alt={data?.title}
        className="w-full h-[50%] object-cover object-bottom"
      />
      <div className="h-[50%] flex flex-col justify-between p-2">
        <h2 className="text-[15px] text-[#ddb66a] font-semibold text-center">
          {data?.title}
        </h2>
        <div className="flex-1 mt-2 text-sm space-y-1">
          {data?.hotels?.map((hotel, index) => (
            <div key={index}>
              <div>
                <span className="font-semibold">{hotel.moullim}</span>{" "}
                <span>{hotel.category}</span>
              </div>
              <div>
                <span className="font-semibold">{hotel.hotelLocation}</span>{" "}
                <span>{hotel.hotelName}</span>
              </div>
            </div>
          ))}
          <p>
            <span className="font-semibold">Departure:</span> {data?.departure}
          </p>
          <p>
            <span className="font-semibold">Rate:</span>{" "}
            <span className="text-[#ddb66a]">{data?.rate}</span> / head
          </p>
          <p className="text-[#ddb66a] text-sm">{data?.days}</p>
        </div>
        <div className="flex items-center justify-between border-t pt-2 mt-2">
          <a href="#" className="hover:underline text-sm">
            Read more...
          </a>
          <Button text="Book now" />
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
