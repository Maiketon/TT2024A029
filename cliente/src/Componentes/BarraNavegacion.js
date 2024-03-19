import React from 'react';
import Logo from '../Utils/LearnMatchCaraHumana.png';
import '../Css/Botones.css';
import { Navbar, NavDropdown ,Nav, Container, Button } from 'react-bootstrap';
const BarraNavegacion = () => 
{
    return(
        <>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
            <img
            src= {Logo} // Ruta del Logo
            width="30"   // Establece el ancho del logo
            height="30"  // Establece la altura del logo
            className="d-inline-block align-top mx-3" // Añade margen a la derecha si es necesario
            alt="LearnMatch logo"
          />
                LearnMatch
            </Navbar.Brand>
            <Nav className="me-auto">
            <NavDropdown title="Material de aprendizaje" id="materialesAprendizaje1" className='mx-2'>
                <NavDropdown.Item href="#action/3.1">Material de aprendizaje 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Material de aprendizaje 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Material de aprendizaje 3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Material de aprendizaje 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about" className="mx-2">Sobre nosotros</Nav.Link>
            </Nav>
            <Nav>
            <Button variant="primary" className="mx-1 btn-inscribete">Inscríbete</Button>
        <Button variant="outline-primary" className="mx-1 btn-iniciar-sesion">Iniciar Sesión</Button>
            </Nav>
        </Container>
    </Navbar>
    </>
    );
}
export default BarraNavegacion;