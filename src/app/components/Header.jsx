import React from "react";
import NavlinkLists from "./NavlinkLists";
import logo from "../../../public/ig-logo.jpg"
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-black/50 text-white">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavlinkLists></NavlinkLists>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl active">
            <Image src={logo} width={40} height={40} alt="Logo Image"/>
            ImmiGroup</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <NavlinkLists></NavlinkLists>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn-yellow">Book Appointment</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
