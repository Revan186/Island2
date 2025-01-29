import { NavLink } from "react-router-dom";
import morrowind from '../assets/morrowind.mp3'
import { logo } from "../assets/images";
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  

  return (
    <header className='header'>
      <NavLink to='/' >
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about'  className={({ isActive }) => isActive ? "text-blue-600" : "text-black"  }>
          <span className='hover:text-blue-600'>About</span>
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
        <span className='hover:text-blue-600'>Projects</span>
        </NavLink>
				<NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
        <span className='hover:text-blue-600'>Contact</span>
				</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;