import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function DetailCard() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [id]);
  if (!data) {
    return <div>Cargando...</div>;
  }
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Card className="card">
        <Card.Img src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Card.Text>${data.price}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <button
        type="button"
        class="btn btn-success"
        onClick={() => window.history.back()}
      >
        Volver al listado
      </button>
    </div>
  );
}

export default DetailCard;
