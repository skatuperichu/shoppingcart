import "./App.css";
import Testimonio from "./componentes/Testimonio";
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
                <Testimonio
                  nombre={title}
                  imagen={image}
                  testimonio={description}
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

//probar progress bar. max-height en el texto de la descripcion con if usando length.
