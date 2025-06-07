import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 flex gap-4 mt-2 relative z-40">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-[#23272f] items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] shadow-cyanShadow">
        <NavbarLogo />
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-[#23272f] items-center justify-center rounded-full border-orange border-[0.5px] shadow-cyanShadow ">
        <NavbarToggler />
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#23272f] border-t border-orange z-30 p-6 flex flex-col items-center gap-6 lg:hidden animate-fade-in shadow-cyanShadow">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
