import React from "react";
import { assets } from "../../assets/assets";

const FeaturedCompany = () => {
  return (
    <section className="featured-company pb-8">
      <div>
        <div className="pb-5">
          <h3 className="text-center text-light-white text-[22px] ">
            Trusted by thousands of users around the world
          </h3>
        </div>

        <div className="pt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex items-center gap-4 place-self-center md:place-self-start">
              <div className="w-[88px] h-[88px]">
                <img
                  src={assets.company1}
                  alt="company logo"
                  className="contain"
                />
              </div>
              <div>
                <img src={assets.stars} alt="stars" className="mb-5" />
                <p className="text-sm text-light-black">
                  <strong>4.5 </strong>Score, 9 Reviews
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-[50px] sm:mt-0 place-self-center">
              <div className="w-[88px] h-[88px]">
                <img
                  src={assets.company2}
                  alt="company logo"
                  className="contain"
                />
              </div>
              <div>
                <img src={assets.stars} alt="stars" className="mb-5" />
                <p className="text-sm text-light-black">
                  <strong>4.5 </strong>Score, 9 Reviews
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-[50px] md:mt-0 pl place-self-center md:place-self-end sm:col-span-2 md:col-auto">
              <div className="w-[88px] h-[88px]">
                <img
                  src={assets.company3}
                  alt="company logo"
                  className="contain"
                />
              </div>
              <div>
                <img src={assets.stars} alt="stars" className="mb-5" />
                <p className="text-sm text-light-black">
                  <strong>4.5 </strong>Score, 9 Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompany;
