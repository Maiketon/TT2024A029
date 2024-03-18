import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, NavDropdown ,Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';

const VistaPrincipal = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">LearnMatch</Navbar.Brand>
    <Nav className="me-auto">
      <NavDropdown title="Material de aprendizaje" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Material de aprendizaje 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Material de aprendizaje 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Material de aprendizaje 3</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Material de aprendizaje 4</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#about">Sobre nosotros</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#signup">Inscríbete</Nav.Link>
      <Nav.Link href="#signin">Iniciar Sesión</Nav.Link>
    </Nav>
  </Container>
</Navbar>


      <Container className="mt-4">
        <Row>
          <Col md={6} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Comunicación</Card.Title>
                <Card.Text>
                  El contenido de la tarjeta sobre comunicación...
                </Card.Text>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Trabajo en equipo</Card.Title>
                <Card.Text>
                  El contenido de la tarjeta sobre trabajo en equipo...
                </Card.Text>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">Lugar para tu mensaje de pie de página.</span>
        </Container>
      </footer>
    </>
  );
}

export default VistaPrincipal;
