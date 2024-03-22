import React, { useState } from "react";
import {Container, Row, Col, Form, Card, Button, Modal} from "react-bootstrap";
import Avatar1 from "./Utils/Avatar1Login.jpg";
import Avatar2 from "./Utils/Avatar2Login.jpg";
import "./Css/Botones.css";
import "./Css/Modales.css";



const FormLogin = ()=>
{   
    //VARIABLES QUE ALMACENAN DE MOMENTO EN EL FRONT EL CORREO Y EL PASSWORD PARA HACER Y DEBUGGEAR LAS VISTAS MODALES //
    const [correo, setCorreo] = useState ();
    const [password, setPassword] = useState();

    //Variables y funciones para manejar el estado de las vistas modales //
    const [modalIncorrecto, setModalIncorrecto] = useState(false);
    const [modalMaterias, setModalMaterias] = useState(false);

    //Funcion que va manipula la logica del inicio de sesion AQUI IRIA EL BACK HASTA CIERTO PUNTO //
    const handleLogin = () => {
        if (correo === "miky_lee24@hotmail.com" && password === "dashita")
    {
        setModalMaterias(true);
    }
    else
    {
        setModalIncorrecto(true);
    }
    }
    
    return (
        <>
        <Container className='pt-3 pb-3' style={{ width: '40%', display:"flex", flexDirection:"column"}}> 


        
        <Modal show={modalIncorrecto}  onHide={() => setModalIncorrecto(false)}>
        <Modal.Header >
          <Modal.Title >Error</Modal.Title>
        </Modal.Header>
        <Modal.Body >Usuario o clave incorrecta.</Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={() => setModalIncorrecto(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      
      <Modal show={modalMaterias} className="modal-materias" onHide={() => setModalMaterias(false)}>
        <Modal.Header className="modal-materias-header">
          <Modal.Title className="modal-materias-titulo">Bienvenido</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-materias-body">Has iniciado sesión correctamente.</Modal.Body>
        <Modal.Footer className="modal-materias-footer">
          <Button variant="primary" onClick={() => setModalMaterias(false)}>
            Genial
          </Button>
        </Modal.Footer>
      </Modal>










            <Row className="justify-content-md-center"> 
                <Col>
                    <Card className="d-flex flex-column" style={{ minHeight: '82vh', flex:1}}>
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Row>
                                <Col>
                                <img
                                src={Avatar1}
                                width={100}
                                height={100}
                                roundedCircle
                                style ={{borderRadius: "50%"}}
                                alt="Avatar"
                                />
                                </Col>

                                <Col>
                                <Card.Title>Bienvenido a LearnMatch</Card.Title>
                                <Card.Text>
                              Para Iniciar Sesion en nuestro sistema, por favor accede con tu correo electrónico y tu contraseña.
                            </Card.Text>
                                </Col>
                                
                                <Col>
                                <img
                                src={Avatar2}
                                width={100}
                                height={100}
                                roundedCircle
                                style ={{borderRadius: "50%"}}
                                alt="Avatar"
                                />
                                </Col>
                            </Row>
                            
                            <Form>

                            <Form.Group as={Row} className="mb-3" controlId="email">
                                <Form.Label className="text-md-right text-start form-label-pe-none">Correo electronico:</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo electronico" onChange={(e) => setCorreo(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="password">
                                <Form.Label className="text-md-right text-start form-label-pe-none">Contraseña:</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña." onChange={(e)=>setPassword(e.target.value)} />
                            </Form.Group>
                            </Form> 
                            <Container>
                                <Col>
                                    <Button variant="outline-primary" type="submit" className="ms-2 btn-iniciar-sesion" onClick={handleLogin}>
                                    Iniciar Sesion
                                    </Button>
                                    </Col>
                            </Container>
                            <Container>
                                <Col>
                                <p>Si olvidaste tu contraseña. No te preocupes haz clic aqui!!</p>
                                    <Button variant="outline-primary" type="submit" className="ms-2 btn-iniciar-sesion">
                                    <strong>Recuperar Contraseña </strong>
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