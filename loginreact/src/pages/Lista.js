import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


const Lista = () => {
  //1 - Configurar los hooks
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
            <Modal.Title>Caterogia BRONCE</Modal.Title>
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

export default Lista;







