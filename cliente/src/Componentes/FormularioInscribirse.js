import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


const FormularioInscribirse = () =>
{
    return (
        <>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>LEARNMATCH</Card.Title>
                  <Card.Text>
                    Forma parte de nuestra comunidad para que aprendas y compartas diversos temas mejorando tus habilidades blandas.
                  </Card.Text>
                  <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-md-right text-start form-label-pe-none">Correo electrónico:</Form.Label>
                      <Col>
                      <Form.Control type="email" placeholder="Ingresa un correo electrónico" />
                      </Col>
                    </Form.Group>
    
                    <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="text-md-right text-start form-label-pe-none">Contraseña:</Form.Label>
                      <Form.Control type="password" placeholder="Ingresa una contraseña que contenga al menos 8 caracteres, una mayúscula, un número y un carácter especial como @, #, $, etc." />
                    </Form.Group>
    
                    <Form.Group as={Row} className="mb-3" controlId="formBasicName">
                      <Form.Label className="text-md-right text-start form-label-pe-none">Nombre:</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu Nombre/s" />
                    </Form.Group>
    
                    <Form.Group as={Row} className="mb-3" controlId="formBasicLastName">
                      <Form.Label className="text-md-right text-start form-label-pe-none">Apellido Paterno:</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu Apellido Paterno" />
                    </Form.Group>
    
                    <Form.Group as={Row} className="mb-3" controlId="formBasicSecondLastName">
                      <Form.Label className="text-md-right text-start form-label-pe-none">Apellido Materno:</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu Apellido Materno" />
                    </Form.Group>
                   
                    <Container>
                   <Col>
                    <Button variant="outline-primary" type="submit" className="ms-2">
                      Registrarse
                    </Button>
                    </Col>
                   </Container>
                <Container>
                    <label style={{
                        justifyContent: "center",
                        textAlign: "center"
                    }}>Si ya tienes una cuenta puedes <strong>Iniciar sesion</strong> </label>
                    
                    </Container>
                   
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        </>
      );
}

export default FormularioInscribirse;