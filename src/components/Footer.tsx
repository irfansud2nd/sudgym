import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <footer className="bg-[#FFF3F4] mt-20">
      <div className="flex flex-col flex-wrap items-center px-10 pt-6">
        <img src={Logo} alt="logo" className="w-[200px] h-10" />
        <h5 className="font-medium text-xl text-center xl:text-xl mt-5 pb-5">
          Made with ❤️ by sudDev
        </h5>
      </div>
    </footer>
  );
};
export default Footer;
