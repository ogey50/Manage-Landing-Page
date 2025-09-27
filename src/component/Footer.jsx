import React from "react";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      {/* Footer container div */}
      <div className="container mx-auto py-10 px-6 flex justify-between md:space-x-0 space-y-8 flex-col-reverse md:space-y-0 md:flex-row">
        {/* logo Section */}
        <div className="flex flex-col-reverse items-center justify-between md:space-x-0 space-y-12 md:flex-col md:space-y-6 md:items-start md:w-1/3">
          {/* copy right text */}
          <div className="mx-auto  md:text-sm my-6 text-center text-white md:hidden">
            Copyright &copy; 2025 All Rights Reserved
          </div>

          {/* Logo */}
          <div>
            <img src="/logo.svg" alt="manage logo" />
          </div>

          {/* Social links container */}
          <div className="flex space-x-2 space-y-4">
            <a href="#">
              <img
                className="h-7"
                src="/icon-facebook.svg"
                alt="facebook icon"
              />
            </a>
            <a href="#">
              <img
                className="h-7"
                src="/icon-instagram.svg"
                alt="instagram icon"
              />
            </a>
            <a href="#">
              <img
                className="h-7"
                src="/icon-pinterest.svg"
                alt="pinterest icon"
              />
            </a>
            <a href="#">
              <img className="h-7" src="/icon-twitter.svg" alt="twitter icon" />
            </a>
            <a href="#">
              <img className="h-7" src="/icon-youtube.svg" alt="youtube icon" />
            </a>
          </div>
        </div>

        {/* list container */}
        <div className="flex justify-around mt-8 md:mt-0 space-x-32 md:w-1/3">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white ">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* form container */}
        <div className="flex flex-col justify-between md:flex-row md:items-end md:w-1/3 md:ml-14">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Get update in your inbox"
                className="rounded-full focus:outline-none py-2 flex-1 px-4 bg-white"
              />
              <button className="bg-brightRed text-white px-6 py-2 ml-2 rounded-full hover:bg-brightRedLight">
                Go
              </button>
            </div>

            <div className="hidden md:block text-white md:text-right mt-18">
              Copyright &copy; 2025. All Rights Reversed
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
