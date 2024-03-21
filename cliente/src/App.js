import './App.css';
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//CONECTAR CON EL BACK//
import Axios from "axios";
 //SE IMPORTA BOOSTRAP DENTRO DE REACT//
import 'bootstrap/dist/css/bootstrap.min.css';
//COMPONENTES D ELA VISTA PRINCIPAL//
import VistaPrincipal from './Componentes/Principal';
import SobreNosotros from "./Componentes/VistasPrincipal/SobreNosotros";


//import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'


  //App se va a encargar de mandar a llamar TODOS los Modulos//
function App() {
  return (
    <div className="App">
    <VistaPrincipal />
    </div>
  );
}

export default App;
