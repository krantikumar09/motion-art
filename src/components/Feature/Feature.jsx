import React from "react";
import { assets } from "../../assets/assets";
import { IoIosArrowRoundForward } from "react-icons/io";

const Feature = () => {
  return (
    <section className="pt-28">
      <div className="flex items-center flex-col sm:flex-row">
        <div className="basis-[60%]">
          <div className="p-[10px]">
            <div className="  text-center xs:text-start">
              <h2 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-light-white font-[500] mb-[10px] leading-relaxed transition-all">
                Turn Your Cursor Into A Colorful Magic Wand & Charm Your
                Visitors
              </h2>
              <p className="text-md sm:lg font-light text-light-black mt-5px]">
                Motion Art for Elementor is a groundbreaking plugin that
                empowers you to effortlessly infuse your website with visually
                stunning motion art elements.
              </p>
            </div>
            <div className="  text-center sm:text-start">
              <button className="px-[35px] py-[20px] text-[20px] bg-gradient-to-r from-orange to-blue rounded-[20px] mt-6 text-white flex items-center gap-5">
                Purchase from envato <IoIosArrowRoundForward size={30}/>
              </button>
            </div>
          </div>
        </div>

        <div className="basis-2/5">
          <div className="grid justify-items-end p-[10px]">
            <img src={assets.feature_img} alt="magic stick" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
