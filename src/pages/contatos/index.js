import React from "react";
import { FaSearch} from 'react-icons/fa';
import Call from '../../img/call-center.jpg';
import Mercado from '../../img/mercado.jpg'
import Email from '../../img/em.png'

export default function Contato( ){
  
    return(
      <div>
        <div className=" flex justify-center items-center text-center  text-4xl font-abc font-bold  text-letras2 py-11">
          <h1>Nossos Contatos</h1>
        </div>

        <div className="flex flex-wrap justify-center items-center  py-20">

        <div className=" px-8">   
            <div className="max-w-sm rounded overflow-hidden shadow-lg   bg-card3">
  <img className=" h-40 w-full" src={Email} />
  <div className="px-6 py-4">
    <div className="text-xl mb-2 text-center text-letras2 font-abc ">Duvidas sobre Atendimento Estudante</div>
    <p className="text-gray-700  text-letras2 text-center">
    Ao enviar sua dúvida para o email <b>faleconosco@passefacil.com.br</b> especifique as seguintes informações: Nome, Nome da Mãe e data de Nascimento (conforme RG ou Certidão de Nascimento).
    </p>
  </div>
  
</div>
</div>
          <div className=" px-8">   
            <div className="max-w-sm rounded overflow-hidden shadow-lg   bg-card3">
  <img className=" h-36 w-full" src={Call} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-center text-letras2">Call Center</div>
    <p className="text-gray-700  text-letras2 text-center">
    O atendimento Call Center é destinado a informar os usuário, tendo horário de funcionamento das 08:00 hs às 20:00 hs de segunda a sexta-feira e em novo horário aos sábados de 8:00 às 14:00 hs. <br/>
    </p>
    <p className="  font-bold text-center text-letras2">
    Informações: (91) 3201-0101
    </p>
  </div>
  
</div>
</div>

<div className=" px-8">   
   <div className="max-w-sm rounded overflow-hidden shadow-lg   bg-card3">
         <img className=" h-40 w-full" src={Mercado} />
     <div className="px-6 py-4">
        <div className="text-xl mb-2 text-center text-letras2 font-abc ">Posto de atendimento autorizado Belém</div>
         <p className="text-gray-700  text-letras2 text-center">
         Endereço: Praça Floriano Peixoto, S/N São Braz.
         Horário de Atendimento: Segunda a Sexta, 8h às 16h <br/>
         Informações: (91) 3201-0100
         </p>
     </div>
   </div>
</div>

</div>   
      </div>



    )
} 

