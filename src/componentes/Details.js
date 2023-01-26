import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./Cards";

function DetailCard() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getData(/*aca esta setData*/);
  }, []);
  return (
    <Row>
      {data.map((detalle) => {
        const { description } = detalle;
        return (
          <Col xs={12} sm={6} md={4}>
            <ProductCard descripcion={description} />
          </Col>
        );
      })}
    </Row>
  );
}

export default DetailCard;
