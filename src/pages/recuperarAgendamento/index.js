import InputMask from "react-input-mask";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../service/api";
import RecuperaPdf from "../../pdf/recuperarProtocolo";



export  default function Recuperar () {

   const [inputCPF, setInputCPF] = useState ();
   const [protocoloRec , setProtocoloRec] = useState();
  /// const [respost, setRespost] =useState();    

   async function recuperarProtocolo() {

    console.log(inputCPF)
        try{
          const response = await api.post(`api/belem/recuperaAgendamento/${inputCPF}`);
         console.log(response.data)
         /// setRespost(response[0].data);
         const recupera = response.data;
                   RecuperaPdf(recupera)
          console.log("🚀 ~ file: index.js:25 ~ recuperarProtocolo ~ setProtocoloRec", recupera)
        }catch{
        
        }
         
    }
    return(
        <div className="flex flex-col  lg:py-4  px-10">
          
           <div className="flex justify-center text-center md: py-10">
                <h1 className="font-loto font-bold  text-letras2   py-4 text-xl">Recuperar Protocolo de Agendamento</h1>
            </div>
          <div className="flex justify-center items-center  mx-20 ">
              <label className="font-abc font-bold uppercase text-xl text-letras2 m-5 ">CPF:</label><br/><br/>
                 <InputMask type="text" mask="999.999.999-99"  className="focus:outline-none border-b w-[15rem]  rounded-t-lg px-2 border-letras2 font-abc bg-card/[.25] h-10" value={inputCPF}   onChange={ (e) => setInputCPF(e.target.value)} />
            </div>
        <div className=" flex flex-wrap justify-center">
            <div className="flex  justify-center pr-2">
               <button className=" rounded-full px-1  w-28 h-8 bg-green hover:bg-letras2 hover:text-2 cursor-pointer  text-white text-lg font-semibold "  onClick={ () => recuperarProtocolo()}>
                   Recuperar
                </button>  
            </div>
         
            <div className="flex  justify-center">
               <Link to={'/'}>
               <button className=" rounded-full px-1 w-28  h-8 bg-green hover:bg-letras2 hover:text-2 cursor-pointer  text-white text-lg font-semibold " >
                   Voltar
                </button>
                </Link>  
            </div>
            
        </div>

            </div>
       
    )
}