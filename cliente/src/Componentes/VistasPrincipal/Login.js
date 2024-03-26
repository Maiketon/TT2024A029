//HOOKS Y COMPONENTES DE BOOTSTRAP//
import React, { useState } from "react";
import {Container, Row, Col, Form, Card, Button, Modal} from "react-bootstrap";
// IMAGENESSECCION PRINCIPAL//
import Avatar1 from "./Utils/Avatar1Login.jpg";
import Avatar2 from "./Utils/Avatar2Login.jpg";
//IMAGENES- ICONOS MODALES//
import EstadoFeliz from "./Utils/Sonrisa.png";
import EstadoTriste from "./Utils/Triste.png";
//HOJAS DE ESTILO//
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

    //Logica para los checkbox de la modal de materias
    // const [checkboxesHabilitadas, setCheckboxesHabilitadas] = useState (new Array(11).fill(true)); //Arreglo utilizado para saber si se debe o no habilitar el checkbox
    const [seleccionIzquierda, setSeleccionIzquierda] = useState(new Array(11).fill(false));
    const [seleccionDerecha, setSeleccionDerecha] = useState(new Array(11).fill(false));
    const [deshabilitado, setDeshabilitado] = useState(new Array(11).fill(false));
    const ActualizarEstado = (indice, columna) => {
        // Actualiza las selecciones y la deshabilitación basada en la columna y el índice
        if (columna === "izquierda") {
            const seleccionados = seleccionIzquierda.filter(seleccion => seleccion).length; //VERIFICO CUANTOS CHECKBOX HAN SIDO SELECCIONADOS//
            if (!seleccionIzquierda[indice] && seleccionados>=3)
            {
                return; //Si se pasa no permito que siga seleccionando mas
            }

            const nuevaSeleccionIzquierda = [...seleccionIzquierda];
            nuevaSeleccionIzquierda[indice] = !nuevaSeleccionIzquierda[indice];
            setSeleccionIzquierda(nuevaSeleccionIzquierda);

            // Cambia la deshabilitación solo si se está marcando el checkbox
            setDeshabilitado(deshabilitado.map((item, i) => i === indice ? nuevaSeleccionIzquierda[indice] : item));
        } else {
            //MISMA LOGICA LA COLUMNA DERECHA //
            const seleccionados = seleccionDerecha.filter(seleccion => seleccion).length;
        if (!seleccionDerecha[indice] && seleccionados >= 3) {
            return;   //Si se pasa no permito que siga seleccionando mas
        }
            const nuevaSeleccionDerecha = [...seleccionDerecha];
            nuevaSeleccionDerecha[indice] = !nuevaSeleccionDerecha[indice];
            setSeleccionDerecha(nuevaSeleccionDerecha);

            // Cambia la deshabilitación solo si se está marcando el checkbox
            setDeshabilitado(deshabilitado.map((item, i) => i === indice ? nuevaSeleccionDerecha[indice] : item));
        }
    };

    const crearCheckboxes = (seleccion, columna) => {
        return seleccion.map((estaSeleccionado, indice) => (
            <Form.Check
                type="checkbox"
                label={`Área académica ${indice + 1}`}
                key={`${columna}-${indice}`}
                id={`checkbox-${columna}-${indice}`}
                checked={estaSeleccionado}
                onChange={() => ActualizarEstado(indice, columna)}
                // Deshabilita basado en el estado deshabilitado y no en la selección del otro lado
                disabled={deshabilitado[indice] && !estaSeleccionado}
            />
        ));
    };
   
    return (
        <>
        <Container className='pt-3 pb-3' style={{ width: '40%', display:"flex", flexDirection:"column"}}> 
      
      <Modal show={modalMaterias} className="modal-materias" centered size="lg" onHide={() => setModalMaterias(false)}>
        <Modal.Header className="modal-materias-header">
          <Modal.Title className="modal-materias-titulo">Bienvenido: Selecciona tus Áreas Académicas</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-materias-body">
            <p>Con base a tu criterio, selecciona 3 areas academicas en las que consideres que tienes deficiencias y 3 opciones academicas en las que posees un dominio que te gustaria compartir con los demás. </p>
        <Row>
        <Col sm={5} className="d-flex align-items-center justify-content-center">
        <img
            src={EstadoTriste}
            width={100}
            height={100}
            roundedCircle
            style ={{borderRadius: "50%"}}
             alt="Avatar"
            />
        </Col>
        <Col sm={2} className="d-flex align-items-center justify-content-center">
        <div style={{ width: '1px', height: '100%', backgroundColor: 'lightgrey' }} />
        </Col>
        <Col sm={5} className="d-flex align-items-center justify-content-center">
        <img
            src={EstadoFeliz}
            width={100}
            height={100}
            roundedCircle
            style ={{borderRadius: "50%"}}
             alt="Avatar"
            />
        </Col>

        </Row>
        <Row className="pt-3">
            <Col sm={5}>
                {crearCheckboxes(seleccionIzquierda, 'izquierda')}
            </Col>

            <Col sm={2} className="d-flex align-items-center justify-content-center">
            <div style={{ width: '1px', height: '100%', backgroundColor: 'lightgrey' }} />
            </Col>

            <Col sm={5}>
                {crearCheckboxes(seleccionDerecha, 'derecha')}
            </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer className="modal-materias-footer">
          <Button variant="primary" onClick={() => setModalMaterias(false)}>
            Se ve bien.
          </Button>
        </Modal.Footer>
      </Modal>

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