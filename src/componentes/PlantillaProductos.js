//PLANTILLA GENERAL DE PRODUCTOS. Cualquier cambio para las plantillas hacerlo aqui.
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function PlantillaProductos(props) {
  const productID = props.id;
  return (
    <div class="col-sm p-1">
      <Card className="card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{`${props.description.slice(0, 50)}...`}</Card.Text>
          <button type="button" class="btn btn-outline-info" id="text_btn">
            <Link to={`/descripcion/${props.productID}`}>Ver más</Link>
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PlantillaProductos;
