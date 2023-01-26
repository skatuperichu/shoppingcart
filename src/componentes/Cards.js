import React from "react";
import "../hojas-de-estilo/Cards.css";
import { Card } from "react-bootstrap";

const vermas = () => {};

function ProductCard(props) {
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

export default ProductCard;
