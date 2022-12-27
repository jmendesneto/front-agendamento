import InputMask from "react-input-mask";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import {toast} from 'react-toastify';
import api from "../../service/api";

export default function Excluir (){
 const [inputCpf , setInputCpf] = useState();
 const [excluir, setExcluir] = useState();
 const navigate = useNavigate();


 async function  excluirAgend () {    
    console.log("🚀 ~ file: index.js:13 ~ excluirAgend ~ inputCpf", inputCpf)
        
    try{
          const response = await api.post(`api/belem/excluirAgendamento/${inputCpf}`);
          setExcluir(response.data[0]);
        //   if(response.data){
          toast.warn(response.data[0])
          navigate('/');

        }catch{
        
        }
          console.log("🚀 ~ file: index.js:27 ~ excluirAgend ~ setExcluir",excluir)
    }

    return(
<div className="flex flex-col  md:px-10">
          
        <div className="flex justify-center text-center md: py-5 ">
            <h1 className="font-loto font-bold  text-letras2   py-4 text-xl">Excluir Agendamento</h1>
        </div>
        <div className="flex justify-center items-center  mx-20 ">
          <label className="font-abc font-bold uppercase text-xl text-letras2 m-5 ">CPF:</label><br/><br/>
          <InputMask type="text" mask="999.999.999-99"  className="focus:outline-none border-b w-[15rem]  rounded-t-lg px-2 border-letras2 font-abc bg-card/[.25] h-10"  value={inputCpf} onChange={(e) => setInputCpf(e.target.value)}  />
        </div>
    <div className=" flex flex-wrap justify-center  pb">
        <div className="flex  justify-center pr-2">
           <button className=" rounded-full px-1  w-28 h-8 bg-green hover:bg-letras2 hover:text-2 cursor-pointer  text-white text-lg font-semibold "  onClick={excluirAgend} >
               Excluir
            </button>  
        </div>
       <div className="flex justify-center">
           <Link to={'/'}>
           <button className="rounded-full px-1 w-28  h-8 bg-green hover:bg-letras2 hover:text-2 cursor-pointer  text-white text-lg font-semibold " >
               Voltar
            </button>
            </Link>  
        </div>
    </div>
</div>
    )
}