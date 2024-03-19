import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Utils/LearnMatchCerebro.png';
import SimonVygotsky from '../Utils/Vygotsky.jpg';
import '../Css/Botones.css';
import CarruselPrinicipal from './CarruselPrincipal';
import { Navbar, NavDropdown ,Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';


import CardConModal from './ModalPrincipal';

const VistaPrincipal = () => {
  return (
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

     

      <Container className='p-5'>
        <Row>
        <Col>
        <img
            src= {SimonVygotsky} // Ruta del Logo
            width="248"   // Establece el ancho del logo
            height="305"  // Establece la altura del logo
            className="align-right mx-3" // Añade margen a la derecha si es necesario
            alt="Imagen de Simon Vygostky"/>
        </Col>
        <Col>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in rhoncus ex. Fusce quis nibh elit. Nam nisl mauris, pharetra at pulvinar quis, sollicitudin ac ligula. Morbi egestas suscipit massa nec vehicula. In hac habitasse platea dictumst. Donec convallis commodo nunc, accumsan mattis neque convallis non. Vestibulum orci nisl, eleifend quis pellentesque at, ornare at massa. Proin sagittis mi eu lorem fringilla, in sollicitudin arcu gravida. Nulla sollicitudin sollicitudin dui, et accumsan enim cursus non.
        </div>
        </Col>
       </Row>
      </Container>

      <Container className="mt-4">
        <Row>
          <Col md={3} className="mb-3">
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Aprende Mas</Button>
                </Card.Body>
              </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Aprende Mas</Button>
                    </Card.Body>
                </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Aprende Mas</Button>
                    </Card.Body>
                </Card>
          </Col>
           <Col md={3} className="mb-3">
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Aprende Mas</Button>
                    </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>

    
      <Container>
      <CarruselPrinicipal/>
      </Container>






      <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">"El maestro debe adoptar el papel de facilitador, no proveedor de contenido" <br/> -Lev Semyonovich Vygotski </span>
        </Container>
      </footer>
    </>
  );
}

export default VistaPrincipal;
