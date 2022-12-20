import React from "react"
import Wave16 from '../../img/wave16.svg'
import  {ReactSVG}  from 'react-svg';
import Logo from '../../img/LogoPF.png'

export default function Footer(){
    // w-0  md:
    return(
         <footer>
            
               <div className="h-auto  inset-x-0 bottom-0   md:w-full fixed">
               <div className="flex flex-wrap justify-end text-end z-40 pr-7  pb-2 inset-x-0 bottom-0  absolute ">
                 <img src={Logo} className="  h-3  md:h-11 " />
                 </div>
                  <ReactSVG src = {Wave16} className="relative "/>
               
                            
               </div>
              </footer>

    )

}
