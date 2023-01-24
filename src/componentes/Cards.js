import React from "react";
import "../hojas-de-estilo/Cards.css";
import { Card } from "react-bootstrap";

const vermas = () => {};

function Cards(props) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text
          id="text"
          className={`cardText ${
            vermas(props.descripcion) ? "cardNewText" : null
          }`}
        >
          {props.descripcion}
        </Card.Text>
        <button
          type="button"
          class="btn btn-outline-info"
          id="text_btn"
          onClick={vermas}
        >
          Ver mas
        </button>
      </Card.Body>
    </Card>
  );
}

/*RETOS: 1)Agregar negrita a palabras del texto. 
2)Hacer que el nombre de alt cambie dinamicamente
3)Recopilar todos los testimonios en un solo objeto, en un archivo separado e importarlo
max-height en el texto de la descripcion con if usando length. */
export default Cards;
