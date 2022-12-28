import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import api from '../../service/api';
import {toast} from 'react-toastify';
import Cal from '../../img/calendarioH.png';
import Calendar from '../../img/calendar.svg';
import Recovery from '../../img/refresh-ccw.svg';
import Excluir from '../../img/file-x-2.svg';
import Cartao from '../../img/cartao.png'


export default function Home(){

     const [iniciar, setIniciar] = useState("");
     const navigate = useNavigate();


 async function handleIniciar(data1) {

  try{
    const response = await api.post(`api/belem`);
  ///  console.log(response.data)
    setIniciar(response.data)
    async function InativaVagas() {
      const resposta = await api.post(`api/belem/inativaVagas`);
    }
    InativaVagas();
        if(response.data.status === true){
           navigate("/pesquisaEscola")   
         } else{
           toast.error("Não existe data para agendamento")
         }
       }catch{
  
        }
  }

     return (
<div className='flex flex-col  md:py-4  '>

       <div className='flex justify-center pb-11'> 
          <h1 className='text-2xl md:text-xl md-4 font-medium  max-w-3xl font-loto text-center text-outra py-20 md:py-3 '>Atendimento exclusivo para os alunos de Belém </h1>
       </div>

 
  <div className="flex flex-wrap   px-24">


          
       <div className="flex flex-wrap  justify-center items-center  ">
            <img src={Cartao} className="mx-1  w-0 md:w-80  mb-0 md:mb-20"/>

       </div>
         
        <div className="flex flex-wrap  justify-center items-center   mt-20 ">
          
	           <div className="hover:bg-card3   w-48 h-40  rounded-lg bg-base-Card  m-8 cursor-pointer" onClick={handleIniciar}>
               <img src={Calendar} className="h-32  mx-9"/>
               <h1 className='text-center text-letras2 text-xl font-abc font-bold'>Iniciar Agendamento</h1>
             </div>
             
       
	          <div className="hover:bg-card3  w-48 h-40  rounded-lg bg-base-Card m-5"  >
               <Link to={'/excluir'}>
               <img src={Excluir} className="h-32 mx-8"/>
               <h1 className='text-center text-letras2  text-xl font-abc font-bold'>Excluir Agendamento</h1>
               </Link>
            </div>

             <div className="hover:bg-card3 w-48 h-40  rounded-lg bg-base-Card m-5" >
                <Link to={'/recuperar'}>
                 <img src={Recovery} className=" flex  flex-wrap h-24   mx-11 justify-center  items-center"/>
                 <h1 className='text-center text-letras2  text-xl font-abc font-bold '>Recuperar Agendamento</h1>
                 </Link>
             </div>

        </div>
    </div>

</div>

    )
};


