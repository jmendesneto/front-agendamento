import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '../../img/alert.png'

export default function NotFould(){
  
    const navigate = useNavigate();
    function home (){
         navigate('/')
    }
    return(
        <div className="flex flex-col   pt-28 pb-9 justify-center items-center text-center md:justify-center">
             
            <div className="  flex flex-wrap  py-4 ">
            <img src={Alert} className=" h-16 px-4"/>
                <h1 className=" text-5xl font-abc font-bold  text-letras2">Essa página não existe</h1>
            </div>
           <div className=" flex py-3 text">
              <div className=" h-1  w-56  bg-green"></div>
           </div>
            <div className= " py-4">
                <h1 className=" text-2xl text-letras font-abc">Retorne para a página inicial clicando no botão abaixo</h1>
            </div>
            <div className=" py-5 pt-11">
                <button className="rounded-full px-1 w-28  h-8 bg-green hover:bg-letras2 hover:text-2 cursor-pointer  text-white text-lg font-abc font-bold" onClick={ () => home()}> Clique aqui</button>
            </div>
        </div>
    )
}