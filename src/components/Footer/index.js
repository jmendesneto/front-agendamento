import React from "react"
import Wave16 from '../../img/wave16.svg'
import  {ReactSVG}  from 'react-svg';
import Logo from '../../img/LogoPF.png'

export default function Footer(){

    return(

         
         <footer className=" inset-x-0 left-0 bottom-0 w-0 md:w-full sm:w-full lg:w-full  ">
            
            <div className="pt-4  md:pt-9">
               <div className="flex flex-wrap sticky justify-end text-end  z-50   pr-10 ">
                 <img src={Logo} className="h-3  md:h-11 " />
                 </div>
                  <ReactSVG src = {Wave16} className="flex-initial sticky invisible  lg:visible  w-0 md:w-full "/>        
                  {/* <ReactSVG src = {Wave16} className="sticky w-0 md:w-full "/>         */}
            </div>
               
                            
            
         </footer>
       

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
