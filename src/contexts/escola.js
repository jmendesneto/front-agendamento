import React, { useState, createContext, useEffect } from "react";
import {api} from '../service/api';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import GeraPdf from "../pdf/protocolo";



export const EscolaContext = createContext ({});

  function EscolaProvider({children}){
    const navigate = useNavigate();
    const [escolas, setEscolas] = useState('');
    const [escola, setEscola] = useState('');
    const [escolaC, setEscolaC] = useState ('');
    const [aluno , setAluno] = useState('');
    const [alunoC , setAlunoC] = useState('');
    const [form ,setForm] = useState('');
    const [prvid,setPrvid] = useState('');
    const [maeAluno,setmaeAluno] = useState('');
    const [nasc,setNasc] = useState('');
    const [CPFAluno,setCPFAluno] = useState('');  
    const [att, setAtt]= useState('');
    const [att2, setAtt2]= useState('');
    const [cpfAgendado, setCpfAgendado]=useState('');
    const [escolaInput, setEscolaInput] = useState('');
    const [attnome,setAttnome] = useState('');
    const [count1, setCount1] = useState ('');
    const [cpf , setCpf] =useState('');
    const [ protocolo, setProtocolo ] =useState ('');

 const  pesquisaEscola = async (input, setInput) => {
     setEscolaInput(input)
       if(input === ''){
          toast.info("Preencha a escola!")}  
  const escola = input.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
     try{
        const response = await  api.post(`/api/belem/pesquisaescola/${escola}`);
           setEscolas(response.data);                     
              if(response.data.length === 0){
                  toast.error("Escola " +input+ " não encontrada")
                          }
       }catch{ 
        }    
        
        }

const consultaEscola = async ( PRV_ID) =>{
const escolaCons = PRV_ID

       try{
          const response = await  api.post(`/api/belem/verifyEscola/${escolaCons}`);
             setEscola(response.data);
         
           const loggedEscola = response.data[2];
                 localStorage.setItem("escola", JSON.stringify(loggedEscola));
                  setEscolaC(loggedEscola);
               console.log("🚀 ~ file: escola.js:63 ~ consultaEscola ~ EscolaC", response.data)
                  setPrvid(response.data[1])
                    if(!response.data[1] ){
                    ////   console.log("🚀 ~ file: escola.js:60 ~ consultaEscola ~  response.data[1]",  response.data[1])
                       toast.error("Escola não informada neste ano!")
                      }
               }catch{ 
               }    
             
                 
}
  
const pesquisaAluno = async (inputAluno, setInputAluno) => {
    if(inputAluno === ''){
        toast.info("Preencha a nome!")      }  

const aluno = inputAluno.normalize('NFD').replace(/[\u0300-\u036f]/g,"")

    try{
          const response = await  api.post(`/api/belem/pesquisaAluno/${aluno}/${prvid}`);
               setAluno(response.data);
               ////console.log("🚀 ~ file: escola.js:88 ~ pesquisaAluno ~ setAluno", aluno)
                 if (response.data.length === 0){
                    toast.error("Aluno(a) "  +aluno+  " não encontrado")
                  }
               setInputAluno("");
          const loggedAluno = response.data[0].BEN_ALUNO;
                localStorage.setItem("aluno", JSON.stringify(loggedAluno));
              setAlunoC(loggedAluno);
                if(response.data.status === false){
                    toast.error("Aluno não encontrado")
                 } else{
                   navigate('/aluno');
                   }
      }catch{ 
      }
          
         
}

const  verifyForm =  async (data) => {
const escolaDados = data.escola;
const alunoDados = data.nome;
const maeDados = data.mae.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
const CPFDados = data.CPF
const datanascDados = data.datanasc.split('/').join('-');

    if(data.escola  === ''){
        navigate('/pesquisaEscola');
        toast.error("Campo aluno vazio")
        return  }  
      if(data.aluno  === ''){
        navigate('/pesquisaEscola');
        toast.error("Campo aluno vazio")
        return }  
    try{
        const response = await  api.post(`/api/belem/verifyForm/${escolaDados}/${alunoDados}/${maeDados}/${CPFDados}/${datanascDados}`);
            setForm(response.data.outBinds);
            setmaeAluno(maeDados);
            setCPFAluno(CPFDados);
            setNasc(datanascDados);
              toast.error(response.data.outBinds[1])
          if(response.data.outBinds[0] === 0){
            navigate('/agendar');
          }
    }catch{
      
    }
}
const  AgendaAtendimento = async (inputHora,maeAluno,nasc,CPFAluno,cdata1,alunoAgend) => {

 try{
    setAtt (inputHora)
      const response = await api.post(`/api/belem/criarAgendamento/${inputHora}/${alunoAgend}/${maeAluno}/${nasc}/${CPFAluno}`);
      
      const localCpf = response.data[0]
            localStorage.setItem("Cpf",localCpf);
      const localAtt = inputHora;
            localStorage.setItem("Att", localAtt);
      const localCount = response.data[1];
            localStorage.setItem("count", localCount)
      const count1= localStorage.getItem("count");

        if (response.data[1] === 0) {
              const cpfAgendado = localStorage.getItem('Cpf');
              const att = localStorage.getItem('Att');
              const response = await api.post(`/api/belem/confirmaPdf/${cpfAgendado}/${att}`);
              const respost = response.data;
           if(respost != null){
                GeraPdf(respost)
                   localStorage.removeItem("aluno");
                   localStorage.removeItem("Att");
                   localStorage.removeItem("escola");
                   localStorage.removeItem("count");
                   localStorage.removeItem("Cpf");
                 navigate("/")
                 toast.success("A gendamento realizado com sucesso!");
               }else{
                toast.error(response.data[2])
                navigate("/")
      }
    }
      }catch{ 
    }
 }
   
const  agendarData = async (ATT_ID,cdata1) =>{
  try{
    const response = await api.post(`/api/belem/criarAgendamento/${ATT_ID}`);
  }catch{
  }  
}

  function duvida (){
    navigate('/ajuda')
  }
    return(
        <EscolaContext.Provider value={{aluno, nasc,maeAluno,CPFAluno,pesquisaEscola, pesquisaAluno, escolas, setEscolas, escolaC, setEscola, setEscolaC, setAlunoC, alunoC , 
        verifyForm, consultaEscola,AgendaAtendimento, agendarData, setAtt,att,escolaInput,setAtt,att,setEscola, escola, duvida}}>
       
            {children}
        </EscolaContext.Provider>
    )
  
        }
  export default EscolaProvider;