//LIBRERIAS DE REACT//
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Logo from '../Utils/LearnMatchCerebro.png';
//FRAMEWORKS DE REACT //
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarruselPrinicipal from './CarruselPrincipal';

//COMPONENTES//
import BarraNavegacion from './BarraNavegacion';
import ContenidoPrincipal from './ContenidoPrincipal';
import SobreNosotros from './SobreNosotros';

const VistaPrincipal = () => {
  const [vista, setVista] = useState('inicio'); // Estado que me permitira que componente mostrar//
  return (
    <>
    <BarraNavegacion setVista={setVista}/>
    {vista === 'inicio' && (
       <ContenidoPrincipal />
      )}
      {vista === 'sobreNosotros' && <SobreNosotros />}      
      <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">"El maestro debe adoptar el papel de facilitador, no proveedor de contenido" <br/> -Lev Semyonovich Vygotski </span>
        </Container>
      </footer>
    </>
  );
}

export default VistaPrincipal;
