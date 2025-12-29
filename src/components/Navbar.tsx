import skygritLogo from "../assets/logo.svg";
// import { useState } from 'react'

const Navbar = () => {
 // const [menuOpen, setMenuOpen] = useState(false);
 
 // const openMenuBar = () => {
 //  setMenuOpen(!menuOpen)
 // }

 return (
  <div className="px-8 py-4 bg-white fixed w-full z-999">
   <nav className="flex justify-between items-center">
    <img src={skygritLogo} alt="logo" className="w-25" />
    <div className="max-md:hidden flex gap-2 items-center">
      <a href="#solutions">
        <button className="font-semibold text-black px-4 py-2 cursor-pointer">Solutions</button>
      </a>
      <a href="#benefits">
        <button className="font-semibold text-black px-4 py-2 cursor-pointer">Benefits</button>
      </a>
      <a href="#impacts">
        <button className="font-semibold text-black px-4 py-2 cursor-pointer">Impacts</button>
      </a>
     <a href="mailto:partnerships@juneinfra.com" target="_blank" rel="noopener noreferrer">
      <button className="bg-[#0B897B] text-white px-4 py-2 rounded-lg cursor-pointer">Request Demo</button>
    </a>
    </div>

    {/* <div className="max-md:block max-lg:hidden lg:hidden px-4 py-2 bg-gray-600" onClick={openMenuBar}>=</div>

    <div className={`fixed top-0 left-0 z-999 h-full w-full sm:w-full overflow-scroll bg-[rgba(32,17,60,1)] text-white px-3 py-6 transform transition-transform duration-300 max-lg:block hidden ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
     <div onClick={openMenuBar}>X</div>
     <div className={`${menuOpen ? "block": "hidden"}`}>
        <div className="absolute right-25 top-30 bg-red-500 text-white">hi</div>
     </div>
    </div> */}
    {/* <div className={`fixed top-0 left-0 z-999 h-full w-full sm:w-full overflow-scroll bg-[rgba(32,17,60,1)] text-white px-3 py-6 transform transition-transform duration-300 max-lg:block hidden ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
     </div> */}
    
   </nav>
  </div>
 );
};

export default Navbar;
