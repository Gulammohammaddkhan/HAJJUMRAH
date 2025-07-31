import React from "react";
import Hero from "./Hero";
import CustomCard from "./CustomCard";
import {
  PackagesCategroies,
  ramadanPackagesCategroies,
  umrahPackagesCategroies,
} from "../../data/Data";
import Button from "./Button";
import Wrapper from "./Wrapper";

function Home() {
  return (
    <div>
      <Hero />
      <Wrapper>
        <h2 className="text-[#ddb66a] text-5xl font-serif font-bold flex justify-center py-20">
          What we Offers
        </h2>
        <h2 className="text-[#ddb66a] text-3xl font-serif font-semibold flex justify-center pb-10 animate__animated animate__pulse animate__infinite">
          Hajj Packages
        </h2>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-lg:grid-cols-2 place-items-center px-4 gap-y-5">
          {PackagesCategroies.map((item, index) => {
            return <CustomCard data={item} key={index} />;
          })}
        </div>
        <div className="flex justify-center mt-7">
          <Button
            className=" "
            text={"View All"}
            bgColor={"#ddb66a"}
            textColor={"#000"}
          />
        </div>
        <h2 className="text-[#ddb66a] text-3xl font-serif font-semibold flex justify-center pt-20 pb-14 animate__animated animate__pulse animate__infinite">
          Umrah Packages
        </h2>
        <div>
          <div className="grid grid-cols-3 gap-5 place-items-center max-lg:grid-cols-2 max-md:grid-cols-1">
            {umrahPackagesCategroies.map((item, index) => {
              return <CustomCard data={item} key={index} />;
            })}
          </div>
          <div className="flex justify-center mt-7">
            <Button
              className=" "
              text={"View All"}
              bgColor={"#ddb66a"}
              textColor={"#000"}
            />
          </div>
        </div>
        <div>
          <h2>Ramadan Umrah Packages</h2>
          <div>
            {ramadanPackagesCategroies.map((item, index) => {
              return <CustomCard data={item} key={index} />;
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Home;
