import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FFF3F4] mt-20">
      <div className="flex flex-col flex-wrap items-center px-10 pt-6">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-10" />
          <h1 className="ml-3 font-bold text-3xl text-custom-maroon">SudGym</h1>
        </div>
        <h5 className="font-medium text-xl text-center xl:text-xl mt-5 pb-5">
          Made with ❤️ by sudDev
        </h5>
      </div>
    </footer>
  );
};
export default Footer;
