import React from "react";
import { assets } from "../../assets/assets";
import "../../App.css";

const Use = () => {
  return (
    <section className="use py-[100px]">
      <div>
        <div className="text-center sm:max-w-[55%] w-full mx-auto">
          <h2 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-light-white font-[500] mb-[10px] leading-relaxed transition-all">
            Apply On Any Section Or Enable For Whole Page
          </h2>
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="grid place-self-center sm:mt-[10px] sm:mx-[10px] sm:mb-[120px] transition-all">
            <div className="bg-gradient-to-b from-sec-gradient-color1 to-sec-gradient-color2 rounded-[20px] border-[#FFFFFF10] border-[2px] p-[30px]">
              <h6 className="text-light-white text-[20px] lg:text-[20px] capitalize leading-relaxed mb-[10px] font-medium">
                apply on section
              </h6>
              <p className="text-md sm:lg font-light text-light-black">
                Apply on section is a game-changer, offering an unparalleled way
                to manage applications directly from your website.{" "}
              </p>
              <div className="max-h-[397px] mt-[30px]">
              <img src={assets.Uses_img1} alt="cover" />
              </div>
            </div>
          </div>

          <div className="grid place-self-center mt-[20px] sm:mt-[80px] sm:mx-[10px] sm:mb-[10px]  transition-all">
            <div className="bg-gradient-to-b from-sec-gradient-color1 to-sec-gradient-color2 rounded-[20px] border-[#FFFFFF10] border-[2px] p-[30px]">
              <h6 className="text-light-white text-[20px] lg:text-[20px] capitalize leading-relaxed mb-[10px]  font-medium">
                Apply On Page
              </h6>
              <p className="text-md sm:lg font-light text-light-black">
                Apply on section is a game-changer, offering an unparalleled way
                to manage applications directly from your website.
              </p>
              <div className="max-h-[397px] mt-[30px]">
              <img src={assets.Uses_img1} alt="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Use;
