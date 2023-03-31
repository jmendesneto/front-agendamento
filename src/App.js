import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Nav from '../src/components/Navbar/index'
import Footer from '../src/components/Footer/index'
// import { Routes } from 'react-router-dom';

function App() {
  return (
   <div >

  <ToastContainer
     position="top-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="colored"/>
   
    <Routes/>
    
 
   
  
   </div>
  );
}

export default App;



