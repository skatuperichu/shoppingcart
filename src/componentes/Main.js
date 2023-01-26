import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "./Cards";

function Main() {
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
    <>
    <h1>CARRITO DE COMPRAS:</h1>
      <Row>
       {data.map((product) => {
           const { title, description, image } = product;
         return (
            <Col xs={12} sm={6} md={4} key={title}>
               <ProductCard
                 nombre={title}
                 imagen={image}
                 descripcion={description}
               />
             </Col>
           );
         })}
      </Row>
    </>
  )
}

export default Main;
