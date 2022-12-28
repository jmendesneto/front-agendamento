///import React from "react";
import Logo from '../../img/LogoPF.png';
import { Link } from 'react-router-dom';
import React ,{useState}from 'react';
import { BiMenu } from "react-icons/bi";


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-2">
                 <div  className='flex font-bold text-2xl  pl-16'> 
                        <a href="/" className=" cursor-pointer"> 
                          <span className="text-letras">WebAgendamento</span>
                          <br/><span className=" text-green-dark ">Belém</span>
                        </a>
                   </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 border-none hover:text-white hover:border-white"   onClick={() => setNavbarOpen(!navbarOpen)}>
    <BiMenu className=' text-letras2'/>
    
    </button>
  </div>
  <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto pr-28 text-letras font-bold"+  (navbarOpen ? " flex" : " hidden")}>
    <div className="text-sm lg:flex-grow justify-center text-end">
        <a href="/contato"  className="block  lg:inline-block lg:mt-0 hover:text-hoverspt  font-abc text-xl px-8 cursor-pointer">
          Nossos Contatos
        </a>
      {/* <a  className="block  lg:inline-block lg:mt-0 hover:text-hoverspt text-sm cursor-pointer px-8  ">
       |
      </a> */}
      <a href='/ajuda' className="block lg:inline-block lg:mt-0 hover:text-hoverspt font-abc text-xl  cursor-pointer  px-8">
      Dúvidas
      </a>
    </div>
  </div>
</nav>
   
  );
}
