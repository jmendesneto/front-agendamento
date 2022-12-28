import { Routes, BrowserRouter as Router, Route, Navigate} from 'react-router-dom';
import React, { useContext} from 'react';
import Home from '../pages/home';
import Pesquisa from '../pages/pesquisaEscola';
import Aluno from '../pages/aluno';
import Agendar from '../pages/agendar'; 
import EscolaProvider from '../contexts/escola';
import Excluir from '../pages/excluirAgendamento';
import Recuperar from '../pages/recuperarAgendamento';
import Contato from '../pages/contatos';
import Ajuda from '../pages/ajuda';
import ConfAgendamento from '../pages/confAgendamento';
import NotFould from '../pages/notFould';

export default function RouteApp (){
    return(

           <Router>
               <EscolaProvider>
               <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/pesquisaEscola" element={<Pesquisa/>}/>
                <Route path="/aluno" element={<Aluno/>}/>
                <Route path="/agendar" element={<Agendar/>}/>
                <Route path='/excluir' element={<Excluir/>}/>
                <Route path='/recuperar' element={<Recuperar/>}/>
                <Route path='/contato' element={<Contato/>}/>
                <Route path="/ajuda"   element={<Ajuda/>}/>
                <Route path='/confAgendamento' element={<ConfAgendamento/>}/>
                <Route path='/404' element={<NotFould/>}/>
                <Route path='*' element={<Navigate to="404"/>}/>
                </Routes>
                </EscolaProvider>
            </Router>
            
    )
}
