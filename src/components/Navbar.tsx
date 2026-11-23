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
        <button className="nav-extra-btns">Solutions</button>
      </a>
      <a href="#benefits">
        <button className="nav-extra-btns">Benefits</button>
      </a>
      <a href="#impacts">
        <button className="nav-extra-btns">Impacts</button>
      </a>
     <a href="mailto:partnerships@juneinfra.com" target="_blank" rel="noopener noreferrer">
      <button className="bg-[#0B897B] text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-100 hover:-translate-y-1 hover:shadow-lg">Request Demo</button>
    </a>
    </div>
    
   </nav>
  </div>
 );
};

export default Navbar;
