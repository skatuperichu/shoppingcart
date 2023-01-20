import "./App.css";
import Cards from "./componentes/Cards";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="App">
      <Container className="contenedor-principal">
        <h1>CARRITO DE COMPRAS:</h1>
        <Row>
          {data.map((product) => {
            const { title, description, image } = product;
            return (
              <Col xs={12} sm={6} md={4}>
                <Cards
                  className="testimonio"
                  nombre={title}
                  imagen={image}
                  descripcion={description}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default App;

//probar progress bar.
