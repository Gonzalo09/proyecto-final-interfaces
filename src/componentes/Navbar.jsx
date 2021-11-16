import React, { Fragment } from 'react'
import { Navbar, Container, Button, Card } from 'react-bootstrap';

const NavbarPropio = ({setEstadoComponente}) => {
    return ( 
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid className="justify-content-center">
                    <Card.Title><h1 style={{fontSize:75}} className="text-white">Harry Potter</h1></Card.Title>
                </Container>
            </Navbar>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container className="justify-content-center">
                        <Button onClick={() => setEstadoComponente(1) } variant="outline-light" className="m-1">Personajes</Button>
                        <Button onClick={() => setEstadoComponente(2) } variant="outline-light" className="m-1">Hechizos</Button>
                        <Button onClick={() => setEstadoComponente(3) } variant="outline-light" className="m-1">Info</Button>
                </Container>
            </Navbar>
        </Fragment>
     );
}
 
export default NavbarPropio;