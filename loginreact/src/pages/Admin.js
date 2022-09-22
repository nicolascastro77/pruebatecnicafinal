import React, { Component, useState,useEffect } from 'react';
import Cookies from 'universal-cookie';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'styled-components';
import DataTable,{createTheme} from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Person() {
    const [users, setUsers] = useState( [] )

//2 - Función para mostrar los datos con fetch
const URL = 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
const showData = async () => {
const response = await fetch(URL)
const data     = await response.json()
console.log(data)
setUsers(data)
}

useEffect( ()=>{
showData()
}, [])

//3 - Configuramos las columns para Datatable
const columns = [
{
  name: 'Atleta',
  selector: row => row.athlete
},
{
  name: 'Edad',
  selector: row => row.age
},
{
  name: 'País',
  selector: row => row.country
},

  {
    name: 'Año',
    selector: row => row.year
  },
  {
    name: 'Fecha',
    selector: row => row.date
  },
  {
    name: 'Deporte',
    selector: row => row.sport
  },
  {
    name: 'Oro',
    selector: row => row.gold
  },
  {
    name: 'Plata',
    selector: row => row.silver
  },
  {
      name: 'Bronce',
      selector: row => row.bronze
    },
    {
      name: 'Total',
      selector: row => row.total
    },

]




//4 - Mostramos la data en DataTable
return (
<div className="App">
  <h1>Tabla de datos</h1>
 <DataTable 
  columns={columns}
  data={users}
  //theme='custom' //habilitar esta linea y descomentar createTheme()
  pagination
 />
</div>
);
}




function Pestaña() {
    const [users, setUsers] = React.useState( [] )
    React.useEffect(() =>{
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data = await fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json')
        const users = await data.json()
        setUsers(users)
    }

    const [show, setShow] =  React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
   
  

  //4 - Mostramos la data en DataTable
  return (


    
    <div className="App">
      <div class="container">
     <div class="row ">
      <div class="col-4 ">
      <center>
      <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="/assets/ORO.png" />
      <Card.Body>
        <Card.Title>Categoria ORO </Card.Title>
        <Card.Text>
        Total: {users.map(item => item.gold).reduce((prev, curr) => prev + curr, 0)} 
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Leer más
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Caterogia ORO</Modal.Title>
          </Modal.Header>
          <Modal.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
        </center>
        </div>
        <div class="col-4 ">
      <center>
      <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="/assets/PLATA.png" />
      <Card.Body>
        <Card.Title>Categoria PLATA </Card.Title>
        <Card.Text>
        Total: {users.map(item => item.silver).reduce((prev, curr) => prev + curr, 0)} 
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Leer más
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Caterogia PLATA</Modal.Title>
          </Modal.Header>
          <Modal.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
        </center>
        </div>
        <div class="col-4 ">
      <center>
      <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="/assets/BRONCE.png" />
      <Card.Body>
        <Card.Title>Categoria BRONCE </Card.Title>
        <Card.Text>
        Total: {users.map(item => item.bronze).reduce((prev, curr) => prev + curr, 0)} 
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Leer más
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Caterogia</Modal.Title>
          </Modal.Header>
          <Modal.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
        </center>
        </div>
    </div>
  </div>
  </div>




  );
}



const cookies = new Cookies();

class Admin extends Component {
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
          <Navbar.Brand> {'Nombre: '+cookies.get('nombre')}</Navbar.Brand>
          <Navbar.Brand>{'Tipo de usuario: '+cookies.get('tipodeusuario')}  </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="lista" title="Pestaña1">
            <Person />
      </Tab>
      <Tab eventKey="profile" title="Pestaña2">
            <Pestaña />

      </Tab>
    </Tabs>


                <br />
                <Button variant="primary" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</Button>
            </div>
        );
    }
}



export default Admin;