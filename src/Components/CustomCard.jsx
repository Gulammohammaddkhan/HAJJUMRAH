import React from "react";
import Button from "./Button";

function CustomCard({ data }) {
  return (
    <div className="max-w-[370px] h-[650px] font-serif text-[#e8d8bb] rounded-md cursor-pointer border-6">
      <img
        src={data?.img}
        alt={data?.title}
        className="min-w-full h-[50%] object-cover object-bottom"
      />
      <div className="h-[50%]">
        <h2 className="px-2 h-[20%] text-[15px] text-[#ddb66a] font-semibold flex items-center justify-center">
          {data?.title}
        </h2>
        <div className="h-[65%] px-2">
          {data?.hotels?.map((hotel, index) => {
            return (
              <div key={index}>
                <span className="font-semibold">{hotel.moullim} </span>
                <span>{hotel.category}</span>
                <div>
                  <span className="font-semibold"> {hotel.hotelLocation}</span>
                  <span>{hotel.hotelName}</span>
                </div>
              </div>
            );
          })}
          <p>
            {" "}
            <span className="font-semibold">Departure :</span> {data?.departure}
          </p>
          <p>
            <span className="font-semibold"> Rate :</span>{" "}
            <span className="text-[#ddb66a]"> {data?.rate} </span> / head
          </p>
          <p className="text-[#ddb66a] text-sm">{data?.days}</p>
        </div>
        <div className="flex items-center justify-between border-t px-2 h-[15%]">
          <a href="" className="hover:scale-105">
            Read more...
          </a>
          <Button text={"Book now"} />
        </div>
      </div>
    </div>
  );
}

export default CustomCard;

// {PackagesCategroies.map((item, index) => {
//         return <CustomCard data={item} key={index} />;
//       })}
