import React from "react";
import { assets } from "../../assets/assets";

const Features = () => {
  return (
    <section className="features py-[100px]">
      <div className="text-center sm:max-w-[55%] w-full mx-auto">
        <h2 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-light-white font-[500] mb-[10px] leading-relaxed transition-all">
          An All-Round Plugin With Powerful Features
        </h2>
        <p className="text-md sm:lg font-light text-light-black">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>

      <div className="features-container pt-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-[20px]">
          <div className="bg-gradient-to-b from-sec-gradient-color1 to-sec-gradient-color2 rounded-[20px] border-[#FFFFFF10] border-[2px]">
            <div className="p-[30px]">
              <div className="feature-img -mt-[20px] -ms-[40px] mb-[20px]">
                <img src={assets.thumb} alt="" />
              </div>
              <div className="features-content">
                <h6 className="text-light-white text-[20px] lg:text-[23px] capitalize leading-relaxed mb-[10px] font-medium transition-all">
                  light weight
                </h6>
                <p className="text-md sm:lg font-light text-light-black leading-relaxed">
                  Motion Art for Elementor is designed to be lightweight.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-sec-gradient-color1 to-sec-gradient-color2 rounded-[20px] border-[#FFFFFF10] border-[2px]">
            <div className="p-[30px]">
              <div className="feature-img -mt-[20px] -ms-[40px] mb-[20px]">
                <img src={assets.moon} alt="" />
              </div>
              <div className="features-content">
                <h6 className="text-light-white text-[20px] lg:text-[23px] capitalize leading-relaxed mb-[10px] font-medium transition-all">
                  100% Responsive
                </h6>
                <p className="text-md sm:lg font-light text-light-black leading-relaxed">
                  Create a consistent visual experience across all devices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-sec-gradient-color1 to-sec-gradient-color2 rounded-[20px] border-[#FFFFFF10] border-[2px] sm:col-span-2 md:col-auto">
            <div className="p-[30px]">
              <div className="feature-img -mt-[20px] -ms-[40px] mb-[20px]">
                <img src={assets.thunder} alt="" />
              </div>
              <div className="features-content">
                <h6 className="text-light-white text-[20px] lg:text-[23px] capitalize leading-relaxed mb-[10px] font-medium transition-all">
                  User Friendly Interface
                </h6>
                <p className="text-md sm:lg font-light text-light-black leading-relaxed">
                  Ensure a smooth experience for both applicants and
                  administrators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
