import React from 'react';
import logo from '../assets/FD-Logo-Pink.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => (
  <header>
    <div className='h-[50px] w-full flex items-center'>
      <div className="h-full w-full flex-1 flex items-center border-b border-b-gray-300 px-6 space-x-6">
        <FontAwesomeIcon icon={faBars}/>
        <img className='max-w-[80px]' src={logo.src} alt=""/>
        <input
          type="text"
          className='border border-gray-300 w-full flex-1 px-3 outline-0'
          placeholder='Search product, brands, article etc'
        />
      </div>
      <button className="bg-[#DC294F] h-full text-white px-6">
        LOGIN/SIGNUP
      </button>
    </div>
    <div className="h-[50px] w-full flex items-center justify-center border-b border-b-gray-300 space-x-5">
      {['SKINCARE', 'MAKE-UP', 'BODY', 'HAIR', 'FRAGRANCE', 'NAILS', 'TOOLS', 'BRANDS'].map((item,idx) => (
        <h3 key={idx} className='font-bold'>
          {item}
        </h3>
      ))}
    </div>
  </header>
);

export default Header;