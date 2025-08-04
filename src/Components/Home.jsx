import React, { useId } from "react";
import Hero from "./Hero";
import Button from "./Button";
import Wrapper from "./Wrapper";
import Carousel from "./Carousel";
import { packageCategories } from "../../data/Data";
import Media from "./Media";

function Home() {
  const updatedData = packageCategories.map((obj, index) => {
    return { ...obj, id: Date.now() + index };
  });

  return (
    <div>
      <Hero />
      <Wrapper>
        <h2 className="text-[#ddb66a] text-5xl font-serif font-bold flex justify-center py-20">
          What we Offers
        </h2>

        {updatedData?.map((obj) => {
          return (
            <div key={obj.id}>
              <h2 className="text-[#ddb66a] text-3xl pt-20 font-serif font-semibold flex justify-center pb-10 animate__animated animate__pulse animate__infinite">
                {obj.type}
              </h2>
              <Carousel data={obj.package} />
              <div className="flex justify-center mt-7">
                <Button
                  className="  "
                  text={"View All"}
                  bgColor={""}
                  textColor={"#ddb66a"}
                />
              </div>
            </div>
          );
        })}
        <Media />
      </Wrapper>
    </div>
  );
}

export default Home;
