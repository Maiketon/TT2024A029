import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown,Button} from 'react-bootstrap';
import './Principal.css';
const imagenesPrueba = require.context('../Imagenes_prueba',true);

function Principal() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="barraNavegacion">
            <Container>
              <Navbar.Brand href="#home">LearnMatch</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Material de aprendizaje" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#features">Sobre Nosotros</Nav.Link>
                </Nav>
                <Nav>
                  <Button href="#deets">Registrarse</Button>
                  <Button href="#deets">Iniciar Sesión</Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
      </Navbar>
      <div className="contenedorPrincipal">
        <div className="cardPrincipal">
          <div className="columna-izq">
            <img className="imgContenido"
              src={imagenesPrueba('./aprendizaje_prueba.jpg')}
              alt={'Imagen de prueba principal'}
            />
          </div>
          <div className="columna-der">
            <p>La teoría de Lev Vygotsky enfatiza la importancia de las relaciones entre el individuo con la sociedad, desarrollando el concepto de Zona de Desarrollo 
              Próximo (ZDP) donde afirma que toda persona es capaz de hacer una actividad en el momento actual y lo que está preparado para hacer aunque no lo haya hecho aún.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;