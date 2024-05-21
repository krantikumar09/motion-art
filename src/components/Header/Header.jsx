import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <header>
      <nav className="py-6 bg-transparent flex items-center justify-between">
        <div>
          <a href="#" className="max-w-[256px] w-full h-[52px]">
            <img
              className="max-w-[220px] w-full"
              src={assets.logo}
              alt="motion art logo"
            />
          </a>
        </div>

        <button className="px-9 py-4 text-lg font-normal text-black-color bg-white rounded-[5px] md:block hidden">
          Purchase Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
