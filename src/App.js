import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Nav from '../src/components/Navbar/index'
import Footer from '../src/components/Footer/index'

function App() {
  return (
   <div >
    <Nav/>
    <ToastContainer autoClose={4000}/>
    <Routes/>
     <Footer /> 
   </div>
  );
}

export default App;



