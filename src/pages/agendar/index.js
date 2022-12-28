import { useState,useEffect} from 'react';
import api from '../../service/api';
import React, { useContext} from 'react';
import {EscolaContext} from '../../contexts/escola';
import PdfPrinter from 'pdfmake';
import GeraPdf from '../../pdf/protocolo'
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';

export default function Agendar(){
    const {alunoC,nasc,maeAluno,CPFAluno,AgendaAtendimento,aluno,agendarData,cpfAgendado,setCpfAgendado,setAtt,att,confirmaPdf} = useContext(EscolaContext);
    const [attid,setAttid] = useState("");
    const [ dias, setDias] = useState([]);
    const [ hora , setHora] = useState([]);
    const [ selectedDias, setSelectedDias] = useState ("");
    const [ inputHora, setInputHora] = useState("");
    const [ cpf,setCpf]  = useState('');
 

useEffect (() =>{
  async function pesqData(){
   const response = await api.post(`/api/belem/data`)
   .then((response)=>{
     setDias(response.data)
   }).catch(  )
  }
  pesqData()
},[])

 const cdata1 = selectedDias.split('/').join('-');//data ajustada pra passar no axios



useEffect (() =>{
     async function pesqHora(){
      const response = await api.post(`/api/belem/hora/${cdata1}`)
      .then((response)=>{
        setHora(response.data)
      }).catch()}
     pesqHora()
},[selectedDias])



function handleSelectedDia (event: ChangeEvent<HTMLSelectElement>){
   const dia = event.target.value;
   setSelectedDias(dia)  
   
}


function agendarAluno(){

  const alunoAgend = aluno[0].BEN_ALUNO;
  
  AgendaAtendimento(inputHora,maeAluno,nasc,CPFAluno,cdata1,alunoAgend);
  
} 

function handleHora (ATT_ID,HORA){
  
  const horario = ATT_ID;
  setInputHora(horario)
 
}
///  console.log("🚀 ~ file: index.js:65 ~ handleHora ~ setInputHora", inputHora)



    return(
        <div className='flex flex-col  md:py-3'>
        <div className=" flex-col  flex items-center justify-center" >
      <div className="text-xl font-semibold text-center  font-abc text-letras2 ">
         <p>O atendimento é PRESENCIAL, selecione o dia e hora para comparecimento ao Posto de Atendimento.</p>
         <p>MERCADO DE SÃO BRÁS.</p>
     </div>
    <div className="bg-white p-1 sm:max-w-md w-full  ">
       
        <div className='p-4'>
           <div>
              <label className="font-abc font-bold uppercase text-letras2">Nome do Aluno</label>
                 <input type="text" className="focus:outline-none uppercase border-b w-full  rounded-t-lg px-4 p-4 border-letras2   font-abc bg-card/[.25] h-9" value={alunoC}/>
            </div>
            <div>
              <label className="font-abc font-bold uppercase text-letras2">Nome da Mãe</label>
                 <input type="text" className="focus:outline-none border-b w-full  uppercase rounded-t-lg px-4 p-4 border-letras2   font-abc bg-card/[.25] h-9" value={maeAluno}/>
            </div>
            <div>
              <label className="font-abc font-bold uppercase text-letras2">CPF</label>
                 <input type="text" className="focus:outline-none border-b w-full  rounded-t-lg px-4 p-4 border-letras2   font-abc bg-card/[.25] h-9" value={CPFAluno}/>
            </div>
        </div>
          <div className='  text-center  ml-4 '>
          <select className='h-9  font-abc bg-base-Card/[.25] bg-gray-50 border  border-letras text-sm rounded-lg focus:ring-letras focus:border-letras block w-[15rem] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-letras  ' nome="dia" id="dia" onChange={handleSelectedDia}>
                  <option value="setSelectedDias">Selecione o dia</option>
                  {dias.map(dia => (
                      <option key={dia.DATA} value={dia.DATA}>{dia.DATA}</option>
                  ))}
                </select>
          </div>

          <div className='text-start p-2 font-abc ml-4'>
          {hora.map ((horas) =>{
                return(
                <label  key={horas.ATT_ID}  value={horas.HORA_ID}>
                <input
                 className='border border-letras'
                 value={inputHora}
                   name="inputHora"
                   id="hora" 
                   onChange={() => handleHora(horas.ATT_ID)}
                   key={horas.ATT_ID} 
                   type="radio" value={horas.ATT_ID} name="gender"/> {horas.HORA}
                 <br/>
                 </label>
                  )}
                )}
           </div>
          <div className='flex justify-center'>
          <button className="  rounded-full p-1   w-full sm:w-56  bg-green hover:bg-letras2 hover:text-2 cursor-pointer  text-white text-lg font-semibold " onClick={ () => agendarAluno()}>
                 AGENDAR
                </button>   
          </div>
       
    </div>

  </div>
 
</div>
    )}

