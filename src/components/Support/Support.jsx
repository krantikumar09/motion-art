import React from "react";
import { assets } from "../../assets/assets";

const Support = () => {
  return (
    <section className="support">
      <div className="m-5 bg-gradient-to-b from-sec-gradient-color1 to-sec-gradient-color2 rounded-[20px] border-[#FFFFFF10] border-[2px]">
        <div className="py-[50px] px-[30px]">
          <div className="flex items-center justify-center flex-col w-full sm:w-1/2 mx-auto text-center">
            <h6 className="text-light-white text-[20px] lg:text-[20px] capitalize leading-relaxed mb-[10px] font-medium">
              supported by all popular browsers
            </h6>
            <p className="text-md sm:lg font-light text-light-black">
              Rest assured, Motion Art is designed to be compatible with all
              major web browsers.
            </p>

            <div className="mt-[15px]">
              <img src={assets.browsers} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
