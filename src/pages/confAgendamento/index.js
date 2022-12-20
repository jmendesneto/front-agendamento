import React , { useContext} from "react";
import { useState } from "react";
import {EscolaContext} from '../../contexts/escola';
import api from "../../service/api";
import { FcApproval } from "react-icons/fc";
export  default function ConfAgendamento (){
    const {alunoC,nasc,maeAluno,CPFAluno,AgendaAtendimento,aluno,agendarData,cpfAgendado,setCpfAgendado,setAtt,att,confirmaPdf} = useContext(EscolaContext);
    const [attnome, setAttnome] = useState ('');


    return(
        <div className="flex flex-col  py-3  px-10">
       <div className="flex-col   p-9 flex items-center justify-center">
       
        <div className=" flex-wrap text-center text-letras2 font-loto font-extrabold  text-xl uppercase pb-5 ">
       <h1 > Agendamento realizado com sucesso </h1><FcApproval/>
        </div>
        <div className=''>
           <div>
               <h1 className="font-abc font-bold  text-letras2  text-lg">Aluno: {aluno}</h1>
           </div>
           <div>
               <h1 className="font-abc font-bold  text-letras2 text-lg">Nome da Mãe:</h1>
           </div>
           <div>
                <h1 className="font-abc font-bold  text-letras2 text-lg">CPF: </h1>
           </div>
           <div>
                <h1 className="font-abc font-bold  text-letras2 text-lg">Data de Agendamento: </h1>
           </div>
           <div>
                <h1 className="font-abc font-bold  text-letras2 text-lg">Horário de Agendamento: </h1> 
           </div>
           <div>
                <h1 className="font-abc font-bold  text-letras2 text-lg">Local de Atendimento: </h1>
           </div>
        </div>
      
          <div className='flex justify-center  py-10 '>
          <button className="  rounded-full p-1   w-full sm:w-56  bg-green hover:bg-letras2 hover:text-2 cursor-pointer  text-white text-lg font-semibold " >
                 Gerar Protocolo
                </button>   
          </div>
          </div>
    </div>
    )
}