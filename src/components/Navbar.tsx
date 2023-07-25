import { Link } from "react-router-dom";

import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="w-full flex place-content-around justify-normal gap-10 sm:gap-[122px] mt-5 sm:mt-8 ">
      <Link to="/">
        <img src={logo} alt="logo" className="w-12 h-12 my-0 mx-5" />
      </Link>
      <div className="flex gap-10 text-2xl items-end">
        <Link
          to="/"
          className="text-custom-maroon border-b-[3px] border-b-[#FF2625]"
        >
          Home
        </Link>
        <a href="#exercises" className="text-custom-maroon">
          Exercises
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
