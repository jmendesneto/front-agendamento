///import React from "react";
// import Logo from '../../img/LogoPF.png';
import {EscolaContext} from '../../contexts/escola';
import React, { useState , useContext} from 'react';
import { BiMenu } from "react-icons/bi";
import {Link} from 'react-router-dom';



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
        <Link  to={'/contato'}>
        <h1  className="block  lg:inline-block lg:mt-0 hover:text-hoverspt  font-abc text-xl px-8 cursor-pointer">
          Nossos Contatos
        </h1>
        </Link>
      
    <Link  to={'/ajuda'}>
      <h1  className="block lg:inline-block lg:mt-0 hover:text-hoverspt font-abc text-xl  cursor-pointer  px-8">
      Dúvidas
      </h1>
      </Link>
 
    </div>
  </div>
</nav>
   
  );
}
