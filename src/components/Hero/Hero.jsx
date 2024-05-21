const Hero = () => {
  return (
    <section className="hero py-20">
      <div className="flex flex-col sm:flex-row">
        <div className="p-3 basis-1/4 text-center xs:text-left flex flex-col items-center sm:items-start">
          <p className="bg-gradient-to-r from-orange to-blue inline-block text-transparent bg-clip-text text-lg capitalize font-medium transition-all mb-1">
            Transform<br /> your website
          </p>
          <p className="text-lg capitalize font-medium text-white">
            with motion art<br className="hidden sm:block" /> effect
          </p>
        </div>

        <div className="p-3 text-center xs:text-left sm:basis-2/3 md:basis-2/4">
          <h1 className="text-4xl sm:text-[40px] md:text-[60px] capitalize font-medium text-white mb-[15px] leading-normal transition-all">
            Attract your visitors attention with colorful{" "}
            <span className="bg-gradient-to-r from-orange to-blue inline-block text-transparent bg-clip-text">
              motion art effect
            </span>
          </h1>
          <p className="text-md sm:lg font-light text-light-black">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
