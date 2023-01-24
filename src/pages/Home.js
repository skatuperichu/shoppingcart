// en esta ruta esta la lista de productos entera
import Cards from "../componentes/Cards";
import { Row, Col, Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="contenedor-principal">
      <h1>CARRITO DE COMPRAS:</h1>
      <div className="container-col">
        <Row>
          {data.map((product) => {
            const { title, description, image } = product;
            return (
              <Col xs={12} sm={6} md={4}>
                <Cards nombre={title} imagen={image} />
                <Routes>
                  <Route>descripcion={description}</Route>
                </Routes>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}
