import { useState, useContext } from "react";
import {EscolaContext} from '../../contexts/escola';
import { useForm ,Controller} from "react-hook-form";
import { cpf } from "cpf-cnpj-validator";
import * as yup from "yup";
import { yupResolver, DateSchema } from '@hookform/resolvers/yup';
import InputMask from "react-input-mask";
import api from '../../service/api'
import axios from "axios";
import { data } from "autoprefixer";


export default function Aluno(){
 
 const {escola , setEscola, escolaC, setEscolaC, alunoC, setAlunoC, verifyForm} = useContext(EscolaContext);
 const [resp , setResp] = useState('')
  
  const schema = yup.object({    
        escola: yup.string(),
        nome: yup.string(),
        mae: yup.string().required('O nome da mãe é obrigatorio'),
        datanasc: yup.string().required("A data de nascimento é obrigatorio"),
        CPF: yup.string().required("CPF é obrigatorio").test((value) => cpf.isValid(value))
      }).required();

    const { register, handleSubmit,control, formState:{ errors } } = useForm({
      
        resolver: yupResolver(schema)
        
      })

      const onSubmit = (data) => {
  
        verifyForm(data)

       /// console.log(data)
      }
      
    return(
    <div className=" flex  flex-col px-10 h-screen  ls:h-auto ">
     <div className=" flex-col  flex items-center justify-center " > 
    <div className="bg-white  px-10 sm:max-w-md w-full rounded-lg ">
        <div className="sm:text-xl text-xl font-semibold text-center  font-abc text-letras2  ">
        <p>Preencha seus dados corretamente</p>
        </div>
        <form className=" " onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="font-abc font-bold uppercase text-letras2">Escola</label>
                 <input type="text" className="focus:outline-none border-b w-full  rounded-t-lg px-2 border-letras2   font-abc bg-card/[.25] h-10" value={escolaC}  {...register("escola")}/>
            </div>
             <div>
                 <label className="font-abc font-bold uppercase text-letras2">Nome do Aluno</label>
                 <input type="text" className="focus:outline-none border-b w-full  rounded-t-lg px-2 border-letras2  font-abc  bg-card/[.25]  h-10" value={alunoC}  {...register("nome")} />
            </div>
             <div>
                 <label className="font-abc font-bold uppercase text-letras2">Nome da Mãe*</label>
                 <input type="text" autoComplete="on" className="focus:outline-none border-b w-full uppercase  rounded-t-lg px-2 border-letras2 font-abc  bg-card/[.25]  h-10" {...register("mae")}/>
                 <p className="font-abc text-erro">{errors.mae?.message}</p>
            </div>
             <div>
                 <label className="font-abc font-bold uppercase text-letras2">Data de nascimento*</label> <br/>
                   <InputMask type="text" mask="99/99/9999" autoComplete="on" className="focus:outline-none border-b w-92  rounded-t-lg px-2 border-letras2 font-abc   bg-card/[.25] h-10"  {...register("datanasc")}  />
                   <p className="font-abc text-erro">{errors.datanasc?.message}</p>
             </div>
            <div >
                 <label className="font-abc font-bold uppercase text-letras2">CPF*</label><br/>
                <InputMask type="text" mask="999.999.999-99" autoComplete="on" className="focus:outline-none border-b w-92 uppercase rounded-t-lg px-2 border-letras2 font-abc   bg-card/[.25] h-10" {...register("CPF")}/>
                <p className="font-abc text-erro">{errors.CPF?.message}</p><br/>
            </div>
          
            <div className="flex justify-center  ">
                <button className=" rounded-full p-1  w-full sm:w-56   bg-green hover:bg-letras2 hover:text-2 cursor-pointer  text-white text-lg font-semibold " type="submit">
                   Confirmar
                </button>         
            </div>
       
        </form>
    </div>
</div>
 
 </div>

    )}; 
