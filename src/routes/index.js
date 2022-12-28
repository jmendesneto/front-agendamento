import { Routes, BrowserRouter as Router, Route, Navigate, useNavigate} from 'react-router-dom';
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
import NotFound from '../pages/notFould';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
export default function RouteApp (){
    return(
        <div>

           <Router>
          
               <EscolaProvider>
               <Nav/>
               <Routes> 
                <Route path='/' element={<Home/>}/>
                <Route path='/pesquisaEscola' element={<Pesquisa/>}/>
                <Route path='/aluno' element={<Aluno/>}/>
                <Route path='/agendar' element={<Agendar/>}/>
                <Route path='/excluir' element={<Excluir/>}/>
                <Route path='/recuperar' element={<Recuperar/>}/>
                <Route path='/contato' element={<Contato/>}/>
                <Route path='/ajuda'   element={<Ajuda/>}/>
                <Route path='/confAgendamento' element={<ConfAgendamento/>}/>
                <Route path='/notFound' element={<NotFound/>}/>
                <Route path='*' element={<Navigate to="notFound"/>}/>
                </Routes>
                <Footer/>
                </EscolaProvider>
            </Router>

            </div>
            
    )
}
