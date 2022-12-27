import {EscolaContext} from '../../contexts/escola';
import { useState, useId, useContext } from 'react';
import api from '../../service/api.js';
import {toast} from 'react-toastify';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { FaSearch} from 'react-icons/fa';
import Footer from '../../components/Footer';

export default function Pesquisar (){
  const { pesquisaEscola, escolas, pesquisaAluno, escolaC,setEscolas, consultaEscola,escolaInput} = useContext(EscolaContext);
  const [input, setInput]=useState("");
  const [inputAluno, setInputAluno] = useState("");
  const [aluno, setAluno] = useState("");
  const [button, setButton] = useState("");


   function handleSearch () {
   
    pesquisaEscola(input, setInput) ///integração com context
     
     }

    function handleClick(PRV_ID){
     
      
      consultaEscola(PRV_ID)
     }
    
    function handleAlunoClick(){
     
      pesquisaAluno(inputAluno, setInputAluno,  setEscolas, escolas,input,setInput) ///integração com contex
  
    }

    return(

<div className=" flex flex-col justify-center md:py-1  px-4 ">
  <div className=' pb-60'>
      <div className=' flex justify-center text-center  pt-3'>
        <h1 className='font-loto font-bold  text-letras2  py-3 text-xl'>Encontre sua instituição de ensino</h1>
      </div>

     <div className="flex justify-evenly items-center pt-4 ">
         <div className=" flex items-center">
            <input  className="flex  relative h-10 w-92  md:w-[40rem]  bg-slate-300 bg-input rounded-xl  px-3 py-1 text-lg place-content-center uppercase font-abc text-center focus:outline-none "
            type="text"
            // placeholder="Pesquise sua escola"
            onChange={(e) => setInput(e.target.value)}/> 
             <FaSearch  className="w-14 h-6 absolute  cursor-pointer text-letras " onClick={handleSearch} />
         </div>         
     </div>

   {escolas &&
  
<div className=" flex flex-wrap justify-center text-center items-center ">
<Scrollbars style={{ width: 640, height: 250 }} >
  <div className="bg-white shadow-md rounded my-6 ">
    <table className=" border-collapse w-[20rem] md:w-[40rem]  px-9 justify-center items-center "> 
      <thead>
        <tr className=' w-[20rem] md:w-[40rem] px-9 justify-center items-center '>
          <th className="py-2 pr-0 md:px-0 bg-grey-lightest uppercase text-sm text-letras2 border-b border-letras text-center font-over font-extrabold ">Código</th>
          <th className="pl-5 bg-grey-lightest uppercase text-sm  text-letras2 border-b border-letras text-center font-over font-extrabold ">Escola</th>
          <th className="py-2 pl-0   md:px-0 bg-grey-lightest uppercase text-sm  text-letras2 border-b border-letras text-center font-over font-extrabold ">Consultar aluno</th>
        </tr>
      </thead>
      {escolas && escolas.map((escola) =>{
      return(
      <tbody>
        <tr className="hover:bg-grey-lighter w-[20rem] md:w-[40rem] justify-center items-center " key={escola.PRV_ID}>
          <td className=" flex-wrap py-4 px-1 md:px-0 border-b border-letras font-abc text-center w-[15rem] md:w-[40rem]">{escola.PRV_ID}</td>
          <td className="flex-wrap py-4 px-1 pl-1 border-b border-letras  font-abc text-center w-[15rem] md:w-[40rem]">{escola.PRV_DESC}</td>
          <td className="flex-wrap py-2 px-1 pl-0  pr-4 md:px-0 border-b border-letras font-abc text-center w-[15rem] md:w-[40rem]">
            <button onClick={() => handleClick(escola.PRV_ID)} className="text-green-dark text-center justify-center font-bold py-1 px-3 rounded text-xs bg-green hover:bg-letras2 hover:text-2 cursor-pointer"><FaSearch /></button>
          </td>
        </tr>
       
      </tbody>)
       }  
             )}
    </table>
   
  </div>
  </Scrollbars>
</div>
  } 

 {escolaC && (
     <div className=' flex flex-row justify-center  '>
        <input
           className='flex rounded-xl m-1  w-64 md:w-[33rem] ponteiro-eventos-auto bg-Base1   h-8 text-center uppercase place-content-center font-abc focus:outline-none cursor-text'
            type='text'
           placeholder='Digite o nome do aluno'
           value={inputAluno}
           onChange={(e) => setInputAluno(e.target.value)}/>
      <br/>
        <button className='w-24  h-8 text-green-dark font-bold px-3 rounded-xl  bg-green hover:bg-letras2 hover:text-2 cursor-pointer' onClick={handleAlunoClick}>Consultar</button>

     </div>
     )}
</div>
  
</div>    
)};

