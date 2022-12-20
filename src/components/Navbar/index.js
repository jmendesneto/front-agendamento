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
        Ajuda
      </a>
    </div>
  </div>
</nav>
    // <>
    //   <nav className="flex-wrap items-center justify-between flex fixed w-full   px-3 md:px-20 py-2 mb-3 ">
    //     <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    //       <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    //       <div  className='flex font-bold text-2xl'> 
    //                     <a href="/" className=" cursor-pointer"> 
    //                       <span className="text-letras">WebAgendamento</span>
    //                       <br/><span className=" text-green-dark ">Belém</span>
    //                     </a>
    //           </div>
    //         <button
    //           className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    //           type="button"
    //           onClick={() => setNavbarOpen(!navbarOpen)}
    //         >
    //           <i ><BiMenu color='#108613'/></i>
    //         </button>
    //       </div>
    //       <div
    //         className={
    //           "lg:flex flex-grow items-center" +
    //           (navbarOpen ? " flex" : " hidden")
    //         }
    //         id="example-navbar-danger"
    //       >
    //          <div className="flex flex-col lg:flex-row list-none lg:ml-auto items-end text-letras font-bold ">
    //                {/* <nav className="flex-1">  */}
    //                      <ul className="flex flex-wrap justify-end flex-1">
    //                          <li className="px-4">
    //                                                             <a href="#" className="text-green-dark hover:text-hoverspt text-sm">Nossos Contatos</a>
                                
    //                          </li>
    //                          <li className="px-4">
    //                            <span className=" border-r  border-white"></span>
    //                          </li>
    //                          <li className="px-4">
    //                           {/* <Link to={'/contato'}>Ajuda</Link> */}
    //                              <a href="/contato"className="text-green-dark hover:text-hoverspt text-sm" >Ajuda</a>
    //                          </li>
                            
    //                          {/* <li className="px-4">
    //                              <a href="#" className="hover:text-hoverspt text-sm">Teste</a>
    //                          </li>
    //                          <li className="px-4">
    //                              <a href="#" className="hover:text-hoverspt text-sm">Teste</a>
    //                          </li> */}
    //                      </ul>
    //                  {/* </nav> */}
    //                </div>
    //         {/* <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    //           <li className="nav-item">
    //             <a
    //               className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    //               href="#pablo"
    //             >
    //               <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a
    //               className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    //               href="#pablo"
    //             >
    //               <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a
    //               className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    //               href="#pablo"
    //             >
    //               <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
    //             </a>
    //           </li>
    //         </ul> */}
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
}
