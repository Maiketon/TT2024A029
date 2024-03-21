import React from "react";
import {Container, Row, Col, Form, Card, Button} from "react-bootstrap";

import "../Css/Botones.css";



const FormLogin = ()=>
{
    return (
        <>
        <Container> 
            <Row className="justify-content-md-center" mt={5}> 
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                            <Card.Title>Bienvenido a LearnMatch</Card.Title>
                            </Row>
                            <Card.Text>
                              Para Iniciar Sesion en nuestro sistema, por favor accede con tu correo electrónico y tu contraseña.
                            </Card.Text>
                            <Form>

                            <Form.Group as={Row} className="mb-3" controlId="email">
                                <Form.Label className="text-md-right text-start form-label-pe-none">Contraseña:</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo electronico" />
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="password">
                                <Form.Label className="text-md-right text-start form-label-pe-none">Contraseña:</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña." />
                            </Form.Group>
                            </Form> 
                            <Container>
                                <Col>
                                    <Button variant="outline-primary" type="submit" className="ms-2 btn-iniciar-sesion">
                                    Iniciar Sesion
                                    </Button>
                                    </Col>
                            </Container>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </Container>


        </>
    );

}

export default FormLogin;