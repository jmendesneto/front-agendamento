
import React from "react";
import Foto from "../../img/1.png"
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
  
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Ajuda (){

    const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

    return(
        <div className=" flex flex-col pt-7">
          <div className=" flex justify-center   pb-14">
            <h1 className=" text-2xl font-semibold text-center  font-abc text-letras2 "> Principais Dúvidas </h1>
          </div>
         <div className="flex flex-wrap justify-center items-center mx-0  md:mx-96 w-64   pb-12 md:w-[30rem]">
            <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="">
        <AccordionHeader onClick={() => handleOpen(1)} className="  text-green-base">
        Critérios para o atendimento - 1ª Via Passe Facil
        </AccordionHeader>
        <AccordionBody>
        Alunos regularmente matriculados e informados pela Instituição de Ensino credenciadas no sistema Passe Fácil, que estejam frequentando o ano letivo em curso;
         Alunos que nunca tiveram cartão Passe Fácil Estudantil;
         Alunos que tiveram seu cartão cancelado em anos anteriores.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="  text-green-base">
        Documentos necessários para a solicitação
        </AccordionHeader>
        <AccordionBody>
        01 (uma) Foto 3x4, colorida, sem marcas e recente (até 02 anos de emissão);
        Original e cópia legível do RG (Certidão de Nascimento apenas em caso de menores de idade);
        Cópia do comprovante de residência com CEP de seu município. (Água, Luz, Telefone, Boletos de Loja, Cartão de Credito, Carnês Escolares, Cópia do Contrato de Locação de Imóvel, Boletos Bancário NO NOME DO USUÁRIO ou com SOBRE NOMES DE FAMILIARES)
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className="  text-green-base">
        Quem poderá receber o cartão?
        </AccordionHeader>
        <AccordionBody>
        O próprio beneficiário ou seu representante legal com documento comprobatório.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className="  text-green-base">
        Quem poderá dar entrada na solicitação?
        </AccordionHeader>
        <AccordionBody>
        O próprio beneficiário (é necessário o cadastro BIOMETRICO).
        </AccordionBody>
      </Accordion>
          
    </Fragment>
    </div> 
        </div>
    )
}