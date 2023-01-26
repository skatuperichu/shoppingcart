import "../hojas-de-estilo/Cards.css";
import { Card } from "react-bootstrap";

const vermas = () => {};

function ProductCard(props) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
        <button
          type="button"
          class="btn btn-outline-info"
          id="text_btn"
          onClick={vermas}
        >
          Ver
        </button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
