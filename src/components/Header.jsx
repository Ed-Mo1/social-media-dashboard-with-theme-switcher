import React from "react";
import HeaderText from "../components/HeaderText";
import ToggleThemeBtn from "../components/ToggleThemeBtn";
function Header() {
  return (
    <div className="container block md:flex justify-between items-center z-10 relative">
      <HeaderText />
      <hr className="md:hidden my-4 bg-light-darkGrayishBlue dark:bg-dark-darkDesaturatedBlue border-0 py-[.6px]"/>
      <ToggleThemeBtn />
    </div>
  );
}

export default Header;
