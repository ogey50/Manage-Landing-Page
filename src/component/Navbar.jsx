import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative p-6 container mx-auto">
      <div className="flex justify-between items-center">
        {/* image container/ */}
        <div className="cursor-pointer pt-2">
          <img src="/logo.svg" alt="logo text" />
        </div>
        {/* links container */}
        <div className="hidden md:flex space-x-3">
          <a href="#" className="hover:text-dark-gray">
            Careers
          </a>
          <a href="#" className="hover:text-dark-gray">
            About Us
          </a>
          <a href="#" className="hover:text-dark-gray">
            Pricng
          </a>
          <a href="#" className="hover:text-dark-gray">
            Product
          </a>
          <a href="#" className="hover:text-dark-gray">
            Community
          </a>
        </div>
        {/* get started button */}
        <div>
          <a className="hidden md:block baseline hover:bg-brightRedLight py-2 px-5 bg-brightRed rounded-full text-white">
            Get Started
          </a>
        </div>
        {/* hamburger icon */}
        <button
          onClick={handleClick}
          className={`${
            isOpen ? "open" : ""
          } block hamburger md:hidden focus:outline-none`}
        >
          <img
            src={isOpen ? "/icon-hamburger.svg" : "/icon-close.svg"}
            alt="menu button"
          />
        </button>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        {/* links div */}
        <div
          id="mobile-menu"
          className={`${
            isOpen
              ? "max-h-96 opacity-100 translate-y-0 flex"
              : "max-h-0 opacity-0 translate-y-2 aria-hidden:"
          } absolute flex-col items-center self-end space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 rounded-lg py-8 mt-4 drop-shadow-2xl transition-all duration-500 ease-in-out transform overflow-hidden`}
        >
          <a
            href="#"
            className="w-full text-center hover:bg-brightRedLight py-2 "
          >
            Pricing
          </a>
          <a
            href="#"
            className="w-full text-center hover:bg-brightRedLight py-2 "
          >
            Product
          </a>
          <a
            href="#"
            className="w-full text-center hover:bg-brightRedLight py-2 "
          >
            About Us
          </a>
          <a
            href="#"
            className="w-full text-center hover:bg-brightRedLight py-2 "
          >
            Careers
          </a>
          <a
            href="#"
            className="w-full text-center hover:bg-brightRedLight py-2 "
          >
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
