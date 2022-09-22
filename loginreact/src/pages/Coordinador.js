import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/coordinador.css'
import Button from 'react-bootstrap/Button';


const cookies = new Cookies();

class Coordinador extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="/assets/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Navbar.Brand> {'Nombre: '+cookies.get('nombre')},{'Tipo de usuario: '+cookies.get('tipodeusuario')}  </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div class="container">
     <div class="row justify-content-center align-items-center">
      <div class="col-5">
      <h1>Sitio Web en mantenimiento</h1>
      </div>
      <div class="col-7">
      <img src='/assets/mantenimiento.png'/>
      </div>
    </div>
  </div>

                <br />
                <Button variant="primary" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</Button>
            </div>
        
        );
    }
}

export default Coordinador;