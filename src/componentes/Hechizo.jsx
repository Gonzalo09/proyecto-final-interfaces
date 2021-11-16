import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Personaje = ({hechizos}) => {
    return ( 
        <Row xs={1} md={3} className="g-4 mt-2">
            {Array.from(hechizos).map((item, index) => (
                <Col key={index}>
                    <Card border="dark" className="h-100 bg-light">
                        <Card.Body className="text-center">
                            <Card.Title>{item.hechizo}</Card.Title>
                            <Card.Text>{item.uso}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
     );
}
 
export default Personaje;