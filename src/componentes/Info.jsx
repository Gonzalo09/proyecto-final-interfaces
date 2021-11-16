import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Personaje = ({informacion}) => {
    return ( 
        <Row xs={1} md={2} className="g-4 mt-2">
            {Array.from(informacion).map((item, index) => (
                <Col key={index}>
                    <Card border="dark" className="h-100 bg-light">
                        <Card.Body className="text-center">
                            <Card.Title>{item.tipo}</Card.Title>
                            <Card.Text>{item.contenido}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
     );
}
 
export default Personaje;