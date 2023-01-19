import React from "react";
import "../hojas-de-estilo/Testimonio.css";
import { Button, Card } from "react-bootstrap";

function Testimonio(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.testimonio}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

/*RETOS: 1)Agregar negrita a palabras del texto. 
2)Hacer que el nombre de alt cambie dinamicamente
3)Recopilar todos los testimonios en un solo objeto, en un archivo separado e importarlo*/
export default Testimonio;
