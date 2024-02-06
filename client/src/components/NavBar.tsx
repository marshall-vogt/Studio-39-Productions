import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import Hamburger from "hamburger-react";
import ModalMenu from "./ModalMenu";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#310a5d]">
        <nav className="flex w-full justify-between container mx-auto">
          <div className="flex items-center">
            <div className="h-20 w-20 my-2">
              <img src="/images/logo1.png" className="rounded-full" />
            </div>
            <div className="text-white text-lg font-bold ps-3">
              Studio 39 Productions
            </div>
          </div>
          <div className="sm:flex items-center justify-around w-[66vw] hidden sm:text-xs md:text-sm lg:text-base 2xl:text-lg">
            <Link to="/">
              <button className="bg-gray-200 hover:bg-gray-300 w-[10vw] h-[4vh] rounded-xl">
                Home
              </button>
            </Link>
            <Link to="/services">
              <button className="hover:bg-gray-300 bg-gray-200 w-[10vw] h-[4vh] rounded-xl">
                Services
              </button>
            </Link>
            <Link to="/equipment">
              <button className="hover:bg-gray-300 bg-gray-200 w-[10vw] h-[4vh] rounded-xl">
                Equipment
              </button>
            </Link>
            <Link to="/rates">
              <button className="hover:bg-gray-300 bg-gray-200 w-[10vw] h-[4vh] rounded-xl">
                Rates
              </button>
            </Link>
            <Link to="/schedule">
              <button className="hover:bg-gray-300 bg-gray-200 w-[10vw] h-[4vh] rounded-xl">
                Schedule
              </button>
            </Link>
            <Link to="/contact">
              <button className="hover:bg-gray-300 bg-gray-200 w-[10vw] h-[4vh] rounded-xl">
                Contact
              </button>
            </Link>
          </div>
          <div className="sm:hidden text-white flex justify-center items-center mr-3">
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
          </div>
        </nav>
      </div>
      <Outlet />
      <div className="bottom-0 left-0 w-full">
        <Footer />
      </div>
      {isOpen && <ModalMenu isOpen={isOpen} setOpen={setOpen} />}
    </div>
  );
}
