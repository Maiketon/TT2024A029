//LIBRERIAS DE REACT//
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Logo from '../Utils/LearnMatchCerebro.png';
//FRAMEWORKS DE REACT //
import { Container} from 'react-bootstrap';


//COMPONENTES//
import BarraNavegacion from './BarraNavegacion';
import ContenidoPrincipal from './ContenidoPrincipal';
import SobreNosotros from './SobreNosotros';
import FormularioInscribirse from './FormularioInscribirse';
import FormLogin from './Login';

const VistaPrincipal = () => {
  const [vista, setVista] = useState('inicio'); // Estado que me permitira que componente mostrar//
  return (
    <>
    <BarraNavegacion setVista={setVista}/>
    {vista === 'inicio' && (
       <ContenidoPrincipal />
      )}
      {vista === 'sobreNosotros' && <SobreNosotros />} 
      {vista ==='inscribirse' && <FormularioInscribirse/>}     
      {vista ==='login' && <FormLogin/>}
      <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">"El maestro debe adoptar el papel de facilitador, no proveedor de contenido" <br/> -Lev Semyonovich Vygotski </span>
        </Container>
      </footer>
    </>
  );
}

export default VistaPrincipal;
