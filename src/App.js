import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Nav from '../src/components/Navbar/index'
import Footer from '../src/components/Footer/index'
// import { Routes } from 'react-router-dom';

function App() {
  return (
   <div >
  
    
    <ToastContainer autoClose={4000}/>
   
    <Routes/>
    
 
   
  
   </div>
  );
}

export default App;



