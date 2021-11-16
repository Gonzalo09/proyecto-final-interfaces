import './App.css';
import React, { useState, useEffect } from 'react'
import Personaje from './componentes/Personaje';
import Hechizo from './componentes/Hechizo'
import Info from './componentes/Info'
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPropio from './componentes/Navbar';
import { Container } from 'react-bootstrap';

function App() {

  const [personajes, setPersonajes] = useState([])
  const urlPersonaje = 'https://fedeperin-harry-potter-api.herokuapp.com/personajes'

  useEffect(()=>{
      const fetchPersonajes = async () => {
          await fetch(urlPersonaje)
          .then(response => response.json())
          .then(json => setPersonajes(json))
          .catch(error => console.log(error))
      }
      fetchPersonajes()
  }, [])

  const [hechizos, setHechizos] = useState([])
  const urlHechizo = 'https://fedeperin-harry-potter-api.herokuapp.com/hechizos'

  useEffect(()=>{
    const fetchHechizos = async () => {
      await fetch(urlHechizo)
      .then(response => response.json())
      .then(json => setHechizos(json))
      .catch(error => console.log(error))
    }
    fetchHechizos()
  }, [])

  const [informacion, setInformacion] = useState([])
  const urlInfo = 'https://fedeperin-harry-potter-api.herokuapp.com/info'

  useEffect(()=>{
    const fetchInfo = async () => {
      await fetch(urlInfo)
      .then(response => response.json())
      .then(json => setInformacion(json))
      .catch(error => console.log(error))
    }
    fetchInfo()
  }, [])
  
  const [estadoComp,setEstadoComponente] = useState(1)

  const mostrarComponentes = () => {
    if(estadoComp === 1){
      return(
        <div className="container">
          <Personaje personajes={personajes}/>
        </div>
      )
    }
    else if(estadoComp === 2){
      return(
        <div className="container">
          <Hechizo hechizos={hechizos}/>
        </div>
      )
    }
    else{
      return(
        <div className="container">
          <Info informacion={informacion}/>
        </div>
      )
    }
  }

  return (
    <Container fluid className="bg-dark p-4">
      <NavbarPropio setEstadoComponente = {setEstadoComponente}/>
      {mostrarComponentes()}
    </Container>
  );
}

export default App;