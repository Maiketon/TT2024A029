//LIBRERIAS DE REACT//
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Logo from '../Utils/LearnMatchCerebro.png';
//FRAMEWORKS DE REACT //
import { Container} from 'react-bootstrap';

//HOJA DE ESTILOS//
import "./Principal.css";

//COMPONENTES//
import BarraNavegacion from './VistasPrincipal/BarraNavegacion';
import ContenidoPrincipal from './VistasPrincipal/ContenidoPrincipal';
import SobreNosotros from './VistasPrincipal/SobreNosotros';
import FormularioInscribirse from './VistasPrincipal/FormularioInscribirse';
import FormLogin from './VistasPrincipal/Login';

const VistaPrincipal = () => {
  const [vista, setVista] = useState('inicio'); // Estado que me permitira que componente mostrar//
  return (
    <>
    <div className="principal-contenedor">
    <BarraNavegacion setVista={setVista}/>


    <div>
    {vista === 'inicio' && (
       <ContenidoPrincipal />
      )}
      {vista === 'sobreNosotros' && <SobreNosotros />} 
      {vista ==='inscribirse' && <FormularioInscribirse setVista={setVista}/>}     
      {vista ==='login' && <FormLogin/>}
    </div>

    <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">"El maestro debe adoptar el papel de facilitador, no proveedor de contenido" <br/> -Lev Semyonovich Vygotski </span>
        </Container>
      </footer>

    </div>      
    </>
  );
}

export default VistaPrincipal;
