
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/home/home';
import Navbar from './componentes/navbar/navbar';
import DetalleProducto from './componentes/detalles/DetalleProducto';
import ListaProducto from './componentes/Productos/ListaProducto';
import LoginForm from './componentes/loginform/loginform';
import RegistrationForm from './componentes/registro/RegistrationForm';
import 'normalize.css';




function App() {


  return (

            <>
            
            <Router>
              <Navbar/>
             

              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<LoginForm/>}></Route>
                <Route path="/registro" element={<RegistrationForm/>}></Route>
                <Route path="/producto/:id" element={<DetalleProducto productos={ListaProducto} />}></Route>
              </Routes>
            </Router>
          </>
);
};  


export default App;
