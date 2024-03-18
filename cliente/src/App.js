import './App.css';
import {useState} from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; //SE IMPORTA BOOSTRAP DENTRO DE REACT//
import VistaPrincipal from './Componentes/Principal';
//import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'

function App() {
  return (
    <div className="App">
     <VistaPrincipal/>
    </div>
  );
}

export default App;
