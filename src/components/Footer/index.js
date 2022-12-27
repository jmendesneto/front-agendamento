import React from "react"
import Wave16 from '../../img/wave16.svg'
import  {ReactSVG}  from 'react-svg';
import Logo from '../../img/LogoPF.png'

export default function Footer(){

    return(

      <div className=" static ">         
         <footer className="sticky  inset-x-0 bottom-0 ">
            
            <div className=" flex-1 inset-x-0 bottom-0   md:w-full fixed pt-8">
               <div className="flex flex-wrap justify-end text-end  z-50   pr-10  relative">
                 <img src={Logo} className="h-3  md:h-11 " />
                 </div>
                  <ReactSVG src = {Wave16} className="w-full"/>        
            </div>
               
                            
            
         </footer>
         </div>

      // <div className=" static ">         
      // <footer className="fixed bottom-0  w-full">
         
      //    {/* <div className=" flex-1 inset-x-0 bottom-0   md:w-full fixed md:pt-8"> */}
      //       <div className="flex flex-wrap justify-end text-end    pr-10  relative">
      //         <img src={Logo} className="h-3  md:h-11 " />
      //         </div>
      //          <ReactSVG src = {Wave16} className=" w-full "/>        
      //    {/* </div> */}
            
                         
         
      // </footer>
      // </div>

    )

}
