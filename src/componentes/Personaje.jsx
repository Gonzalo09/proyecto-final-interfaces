import React from 'react'
import { Card, ListGroup, ListGroupItem, Row, Col, Accordion, Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Personaje = ({personajes}) => {
    return ( 
        <Row xs={1} md={3} className="g-4 mt-2">
            {Array.from(personajes).map((item, index) => (
                <Col key={index}>
                    <Card border="dark" className="h-100 bg-light">
                        <Image src={item.imagen} className="mt-3 rounded mx-auto d-block"/>
                        <Card.Body>
                            <Card.Title className="text-center">{item.personaje}</Card.Title>
                        </Card.Body>
                        <ListGroup variant="flush">
                            <ListGroupItem>Apodo: {item.apodo}</ListGroupItem>
                            <ListGroupItem>Casa: {item.casaDeHogwarts}</ListGroupItem>
                            <ListGroupItem>Estudiante de Hogwarts: {`${item.estudianteDeHogwarts}`}</ListGroupItem>
                            <ListGroupItem>Interpretado por: {item.interpretado_por}</ListGroupItem>
                        </ListGroup>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Hijos</Accordion.Header>
                                <Accordion.Body>
                                {item.hijos.map((hijo) =>(
                                    <ListGroupItem>{hijo}</ListGroupItem>
                                ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Col>
            ))}
        </Row>
     );
}
 
export default Personaje;