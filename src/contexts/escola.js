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
    // const [cpfProtocolo, setCpfProtocolo ] = useState('');
    const [escolaInput, setEscolaInput] = useState('');
    const [attnome,setAttnome] = useState('');
    const [count1, setCount1] = useState ('');
    const [cpf , setCpf] =useState('');
    const [ protocolo, setProtocolo ] =useState ('');

 
const  pesquisaEscola = async (input, setInput) => {
     setEscolaInput(input)
       if(input === ''){
               toast.info("Preencha a escola!")
               
                            }  

                            const escola = input.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
        
                            
                     try{
                           const response = await  api.post(`/api/belem/pesquisaescola/${escola}`);
                         //// console.log(response.data[0].PRV_DESC);
                           setEscolas(response.data);
                       
                        if(response.data.length === 0){
                           toast.error("Escola não encontrada")
                          }
                      }catch{ 
                      }    
        }

const consultaEscola = async ( PRV_ID) =>{
  /// console.log(PRV_ID)
    const escolaCons = PRV_ID
   //console.log(escolaCons)
       try{
          const response = await  api.post(`/api/belem/verifyEscola/${escolaCons}`);
          setEscola(response.data);
                   /// console.log(escola);          
           const loggedEscola = response.data[2];
           localStorage.setItem("escola", JSON.stringify(loggedEscola));
               setEscolaC(loggedEscola);
               setPrvid(response.data[1])
                 if(! response.data[1] ){
                       toast.error("Escola não informada neste ano!")
                      }
               }catch{ 
               }    
}
  
const pesquisaAluno = async (inputAluno, setInputAluno) => {
 
  
    if(inputAluno === ''){
        toast.info("Preencha a nome!")

      }  

      const aluno = inputAluno.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
      try{
          const response = await  api.post(`/api/belem/pesquisaAluno/${aluno}/${prvid}`);
        ///  console.log(response.data);
          setAluno(response.data);
          if (response.data.length === 0){
            toast.error("Aluno não encontrado")
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
          ///console.log("🚀 ~ file: escola.js:94 ~ pesquisaAluno ~ setAluno", aluno)
     
}

const  verifyForm =  async (data) => {
    const escolaDados = data.escola;
    const alunoDados = data.nome;
    const maeDados = data.mae.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    const CPFDados = data.CPF
    const datanascDados = data.datanasc.split('/').join('-');
     // console.log("teste dos dados",data.datanasc);
    //console.log('context escola',data.escola)
    //console.log('context',data)

    if(data.escola  === ''){
        navigate('/pesquisaEscola');
        toast.error("Campo aluno vazio")
        return
      }  
      if(data.aluno  === ''){
        navigate('/pesquisaEscola');
        toast.error("Campo aluno vazio")
        return
      }  


    try{
        const response = await  api.post(`/api/belem/verifyForm/${escolaDados}/${alunoDados}/${maeDados}/${CPFDados}/${datanascDados}`);
        ///console.log("teste de resposta",response.data.outBinds[0]);
          setForm(response.data.outBinds);
          setmaeAluno(maeDados);
          setCPFAluno(CPFDados);
          setNasc(datanascDados);
         //// console.log(response.data);
          toast.error(response.data.outBinds[1])
          if(response.data.outBinds[0] === 0){
            navigate('/agendar');
          }
          
       
    }catch{
      
    }
}
const  AgendaAtendimento =  async (inputHora,maeAluno,nasc,CPFAluno,cdata1,alunoAgend) => {

 try{
   
  setAtt (inputHora)
      const response = await api.post(`/api/belem/criarAgendamento/${inputHora}/${alunoAgend}/${maeAluno}/${nasc}/${CPFAluno}`);
  ///   console.log("teste de resposta",response.data);
      
      const localCpf = response.data[0]
           localStorage.setItem("Cpf",localCpf);
           /// console.log("🚀 ~ file: escola.js ~ line 183 ~ AgendaAtendimento ~ setCpfAgendado", cpfAgendado)
      const localAtt = inputHora;
          localStorage.setItem("Att", localAtt);

      const localCount = response.data[1];
      localStorage.setItem("count", localCount)
      
          const count1= localStorage.getItem("count");

   if (response.data[1] === 0) {
   
          // console.log('entrou no if consulta');
          const cpfAgendado = localStorage.getItem('Cpf');
          const att = localStorage.getItem('Att');
          const response = await api.post(`/api/belem/confirmaPdf/${cpfAgendado}/${att}`);
          const respost = response.data;
         /// console.log("🚀 ~ file: escola.js:199 ~ pesqProtocolo ~ respost", respost)
  
        //  console.log("🚀 ~ file: escola.js:180 ~ flushSync ~ setProtocolo", protocolo)

       
        //   console.log("🚀 ~ file: escola.js:180 ~ flushSync ~ setProtocolo", protocolo)
       
    
         
        //  console.log("🚀 ~ file: index.js:22 ~ ConsultaAgendamento ~ setProtocolo", protocolo)
        
        // console.log("Fez a pesquisa")

 
   if(respost != null){
   ///  console.log("if respost")
     GeraPdf(respost)
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

  }   //,attnome,setAttnome
  ///setCpfAgendado, cpfAgendado,
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