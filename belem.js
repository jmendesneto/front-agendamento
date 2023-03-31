//const { json } = require('express');
const oracledb = require('oracledb');
const database = require('../services/database.js');
const baseQuery =
`SELECT COUNT(DISTINCT(DATA_ATT)) AS dias FROM  SETRANSBEL_MERLIN.ATENDIMENTO_PF_POSTOS
WHERE TIPO_ATT=1 AND CATEG_ATT=3 AND PST_TT = :posto AND STATUS_ATT='L' ORDER BY DATA_ATT ASC`;

async function data(context) {
  let query = baseQuery;
  const binds = {};

  //binds.parametro = context.id+'%'
  binds.posto = context.posto;
  
  const result = await database.simpleExecute(query, binds);
  //   { dir:oracledb.BIND_IN, type: oracledb.STRING, val: binds.USR_ID},
  // ]
  
  console.log('resultado',result.rows);
  return (result.rows);
}

const basequery2 =
`SELECT distinct P.PRV_ID, P.PRV_DESC
FROM BELEM.PROVIDERSXPROVIDERTYPES PP ,belem.providers P, BELEM.providerxinformacoes pi, belem.provideraddresses PA
WHERE  P.PRV_ID = PP.PRV_ID
AND P.PRV_ID=pi.PRV_ID
AND PA.PRV_ID = pi.PRV_id
AND PA.cit_id=0
AND P.PRV_STATUS = 'A'
AND PP.PRVT_CODE=1 
AND P.PRV_DESC LIKE UPPER (:parametro)`;

async function pesqescola(context) {
    let query = basequery2;
    const binds= {};

    binds.parametro = "%"+context.escola+"%";
console.log("parametro",binds.parametro)
    const result = await database.simpleExecute(query, binds);
    return (result.rows);
}

const baseQuery5 =
// `SELECT DISTINCT(DATA_ATT),TO_CHAR(DATA_ATT,'DD/MM/YYYY') AS DATA, ATT_ID, HORA_ATT FROM  SETRANSBEL_MERLIN.ATENDIMENTO_PF_POSTOS
// WHERE TIPO_ATT=1 AND CATEG_ATT=3 AND PST_TT = :posto AND STATUS_ATT='L' ORDER BY DATA_ATT ASC`;
`SELECT DISTINCT(DATA_ATT),TO_CHAR(DATA_ATT,'DD/MM/YYYY') AS DATA FROM  SETRANSBEL_MERLIN.ATENDIMENTO_PF_POSTOS
WHERE TIPO_ATT=1 AND CATEG_ATT=3 AND PST_TT = :posto AND STATUS_ATT='L' ORDER BY DATA_ATT ASC`;

async function datalivre(context) {
  let query = baseQuery5;
  const binds = {};
  //binds.parametro = context.id+'%'
  binds.posto = context.posto;
  
  const result = await database.simpleExecute(query, binds);
  //   { dir:oracledb.BIND_IN, type: oracledb.STRING, val: binds.USR_ID},
  // ]
  
  console.log('resultado',result.rows);
  return (result.rows);
}

const baseQuery6 =
`
SELECT DISTINCT(HORA_ATT) AS HORA, ATT_ID FROM  SETRANSBEL_MERLIN.ATENDIMENTO_PF_POSTOS
WHERE TIPO_ATT=1 AND CATEG_ATT=3  AND DATA_ATT = TO_DATE(:data1,'DD/MM/YYYY') AND PST_TT = :posto  AND STATUS_ATT='L' ORDER BY HORA_ATT ASC
`;
async function horalivre(context) {
  let query = baseQuery6;
  const binds = {};

  binds.data1 = context.cdata;
  binds.posto = context.posto;
  console.log("teste",binds.data1);
  const result = await database.simpleExecute(query,binds);//[
    
  console.log('resultado',result.rows);
  return (result.rows);
}

async function datalivre(context) {
  let query = baseQuery5;
  const binds = {};

  //binds.parametro = context.id+'%'
  binds.posto = context.posto;
  
  const result = await database.simpleExecute(query, binds);
    
  console.log('resultado',result.rows);
  return (result.rows);
}
//-------------------------------------------------------
const baseQuery7 =
`

`;

async function insereVaga(context) {
  let query = baseQuery7;
  const binds = {};
  
  binds.hora = context.hora;
  binds.cdata = context.cdata;
  
  console.log("teste",binds.cdata);
  console.log("teste hora",binds.hora);
 // const result = await database.simpleExecute(query,binds);//[
  //   {dir: oracledb.BIND_IN, type: oracledb.NUMBER, val: binds.posto},
  //    { dir:oracledb.BIND_IN, type: oracledb.STRING, val: binds.data1}
     
  //  ]
  // );
  
  //console.log('resultado',result.rows);
  //return (result.rows);
}

const basequery8 =
`SELECT BEN_ALUNO FROM SETRANSBEL_MERLIN.ALUNOS_NOVOS WHERE BEN_ALUNO = UPPER (:parametro) AND PRV_ID = :prvid AND CHAVE_SISTEMA = 'R' AND ANO  IN (TO_CHAR(SYSDATE, 'YYYY') ,TO_CHAR(SYSDATE, 'YYYY')-1 ) `////extract(YEAR from SYSDATE)`;

async function pesqAluno(context) {
    let query = basequery8;
    const binds= {};

    binds.parametro = context.inputAluno;//+"%";
    binds.prvid = context.prvid;
    console.log("parametro",binds.parametro)
    const result = await database.simpleExecute(query, binds);
    return (result.rows);
}



async function verifyForm(context) {
    const baseQuery = `ALTER SESSION SET NLS_DATE_FORMAT = 'DD/MM/YYYY'`;
    await database.simpleExecute(baseQuery);
    
    const basequery9 = `BEGIN SETRANSBEL_MERLIN.verify_schedule_novo(:aluno,:mae,:datanasc,:cpf,:idmsg,:msg); END;`;

    const binds= {};
        
        binds.aluno = context.alunoDados;
        binds.mae = context.maeDados;
        binds.datanasc = context.datanascDados;
        binds.cpf = context.CPFDados;
        binds.idmsg = oracledb.outFormat;
        binds.msg = oracledb.outFormat;
    
    const result = await database.simpleExecute(basequery9, [
      {dir:oracledb.BIND_IN, type: oracledb.STRING, val: binds.aluno},
      {dir: oracledb.BIND_IN, type: oracledb.STRING, val: binds.mae},
      {dir: oracledb.BIND_IN, type: oracledb.STRING, val: binds.datanasc},
      {dir: oracledb.BIND_IN, type: oracledb.STRING, val: binds.cpf},
      {dir:oracledb.BIND_OUT,type: oracledb.NUMBER,val: binds.idmsg},
      {dir:oracledb.BIND_OUT,type: oracledb.STRING,val: binds.msg}    
      ]);

    return (result);
}

const basequery10 =
`BEGIN SETRANSBEL_MERLIN.VERIFY_ESCOLA_AGENDAMENTO_REACT(:prvid,:cidade,:msg,:prv_id_out,:prv_desc); END;`;

async function verifyEscola(context) {
    let query = basequery10;
    const binds= {};
    binds.prvid = context.prvid;
    binds.cidade = context.cidade;  
    binds.msg = oracledb.outFormat;
    binds.prv_id_out = oracledb.outFormat;
    binds.prv_desc = oracledb.outFormat;

    console.log("parametro",binds.prvid)
    const result = await database.simpleExecute(query,[
      {dir: oracledb.BIND_IN, type: oracledb.STRING, val: binds.prvid},
      {dir:oracledb.BIND_IN, type: oracledb.NUMBER, val: binds.cidade},           
      {dir: oracledb.BIND_OUT, type: oracledb.STRING, val: binds.msg},
      {dir:oracledb.BIND_OUT,type: oracledb.NUMBER,val: binds.prv_id_out},
      {dir:oracledb.BIND_OUT,type: oracledb.STRING,val: binds.prv_desc} 
       ]
          );
          console.log("parametro",result)
    return (result);
}

const basequery11 =
`BEGIN SETRANSBEL_MERLIN.CREATE_SCHEDULE(:ATT_ID, :CD_ID, :alunoDados, :maeDados, :datanascDados, :CPFDados,:CPF, :ID_MSG, :MSG); commit; END;`;

async function criarAgendamento(context) {
    let query = basequery11;
    const binds= {};
        binds.ATT_ID = context.ATT_ID;
        binds.CD_ID = context.CD_ID;
        binds.alunoDados = context.alunoDados;
        binds.maeDados = context.maeDados;
        binds.datanascDados = (context.datanascDados.split('-').join('/'));
        binds.CPFDados = context.CPFDados;
        binds.CPF = oracledb.outFormat;
        binds.ID_MSG =oracledb.outFormat;
        binds.MSG =oracledb.outFormat;

        console.log("testes de binds attid",binds.ATT_ID);
        console.log("testes de binds cdid",binds.CD_ID);
        console.log("testes de binds aluno",binds.alunoDados);
        console.log("testes de binds mae",binds.maeDados);
        console.log("testes de binds data",binds.datanascDados);
        console.log("testes de binds cpf",binds.CPFDados);
        console.log("testes de binds",binds.CPF);
        console.log("testes de binds",binds.ID_MSG);
        console.log("testes de binds",binds.MSG);


    console.log("parametro",binds.datanascDados);
    const att = binds.ATT_ID;
    const result = await database.simpleExecute(query,[
      {dir: oracledb.BIND_IN, type: oracledb.NUMBER, val: binds.ATT_ID},
      {dir: oracledb.BIND_IN, type: oracledb.NUMBER, val: binds.CD_ID},
      {dir: oracledb.BIND_IN, type: oracledb.STRING, val: binds.alunoDados},           
      {dir: oracledb.BIND_IN, type: oracledb.STRING, val: binds.maeDados},           
      {dir: oracledb.BIND_IN, type: oracledb.STRING, val: binds.datanascDados},           
      {dir: oracledb.BIND_IN, type: oracledb.STRING, val: binds.CPFDados},           
      {dir: oracledb.BIND_OUT,type: oracledb.STRING, val: binds.CPF},
      {dir: oracledb.BIND_OUT,type: oracledb.NUMBER, val: binds.ID_MSG},
      {dir: oracledb.BIND_OUT,type: oracledb.STRING, val: binds.MSG} 
       ]
          );
          console.log("parametro",result)
    return (result);
}

const baseQuery12 = `SELECT R.REGATT_ID,R.ATT_NOME,R.ATT_ID,R.ATT_MAE,R.ATT_NASC,R.ATT_CPF,R.ATT_ID,R.CD_ID,TO_CHAR(P.DATA_ATT,'DD/MM/YYYY') AS DATA_ATT,P.HORA_ATT FROM SETRANSBEL_MERLIN.REG_ATENDIMENTO_PF R, setransbel_merlin.atendimento_pf_postos P 
where R.ATT_ID=P.ATT_ID
AND R.STATUS_REG='A'
AND R.ATT_CPF = :cpf
AND R.ATT_ID = :att`;

async function confirmaPdf(context) {
  let query = baseQuery12;
  const binds = {};

  //binds.parametro = context.id+'%'
  binds.cpf = context.cpf;
  binds.att = context.att;
  
  const result = await database.simpleExecute(query, binds);
  //   { dir:oracledb.BIND_IN, type: oracledb.STRING, val: binds.USR_ID},
  // ]
  
  console.log('resultado',result.rows);
  return (result.rows);

}

const baseQuery13 = ` SELECT R.REGATT_ID,R.ATT_NOME,R.ATT_CPF, R.ATT_MAE,R.ATT_NASC,R.ATT_NASC,R.ATT_NASC,TO_CHAR(P.DATA_ATT,'DD/MM/YYYY') AS DATA_ATT,P.HORA_ATT  FROM SETRANSBEL_MERLIN.REG_ATENDIMENTO_PF R, setransbel_merlin.atendimento_pf_postos P 
where R.ATT_ID=P.ATT_ID
AND R.STATUS_REG='A'
AND R.ATT_CPF = :cpf`;

async function recuperaAgendamento(context) {
  let query = baseQuery13;
  const binds = {};

  //binds.parametro = context.id+'%'
  binds.cpf = context.cpf;
  console.log("cpf",context.cpf);
  //binds.att = context.att;
  
  const result = await database.simpleExecute(query, binds);
  //   { dir:oracledb.BIND_IN, type: oracledb.STRING, val: binds.USR_ID},
  // ]
  
  console.log('resultado',result.rows);
  return (result.rows);
}

const baseQuery14 =
`UPDATE SETRANSBEL_MERLIN.ATENDIMENTO_PF_POSTOS SET STATUS_ATT ='I' WHERE ATT_ID IN (
  SELECT ATT_ID FROM SETRANSBEL_MERLIN.ATENDIMENTO_PF_POSTOS P WHERE 1=1
  AND P.DATA_ATT < SYSDATE AND P.STATUS_ATT = 'L'
  AND TO_CHAR(SYSDATE , 'hh24') > to_char(SUBSTR ( HORA_ATT ,1 , 2 )))`;

async function inativaVagas(context) {
  let query = baseQuery14;
  const binds = {};

  //binds.parametro = context.id+'%'
// binds.posto = context.posto;
  
  const result = await database.simpleExecute(query, binds);
   
  console.log('inativa vagas',result.rows);
  return (result.rows);
}

const baseQuery15 = ` BEGIN SETRANSBEL_MERLIN.SP_ExcluiAgendPostos(:cpf,:MSG); END; `;

async function excluirAgendamento(context) {
  let query = baseQuery15;
  const binds = {};

  //binds.parametro = context.id+'%'
  binds.cpf = context.cpf;
  binds.MSG = oracledb.outFormat;
  console.log("cpf",context.cpf);
  //binds.att = context.att;
    
  const result = await database.simpleExecute(query,[
    {dir: oracledb.BIND_IN, type: oracledb.STRING, val: binds.cpf},
    {dir: oracledb.BIND_OUT, type: oracledb.STRING, val: binds.MSG}
  ]);
    
  console.log('resultado',result);
  return (result);
}


module.exports.data = data;
module.exports.pesqescola = pesqescola;
module.exports.datalivre = datalivre;
module.exports.horalivre = horalivre;
module.exports.insereVaga = insereVaga;
module.exports.pesqAluno = pesqAluno;
module.exports.verifyForm = verifyForm;
module.exports.verifyEscola = verifyEscola;
module.exports.criarAgendamento = criarAgendamento;
module.exports.confirmaPdf = confirmaPdf;
module.exports.recuperaAgendamento = recuperaAgendamento;
module.exports.inativaVagas = inativaVagas;
module.exports.excluirAgendamento = excluirAgendamento;