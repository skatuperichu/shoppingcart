import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
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
    getData(/*aca esta setData*/);
  }, []);

  return (
    <>
      <Row>
        {data.map((product) => {
          const { title, image } = product;
          return (
            <Col xs={12} sm={6} md={4} key={title}>
              <ProductCard nombre={title} imagen={image} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Main;

//HACER CARPETA PAGES (HOME, DETALLE, ABOUT)Y OTRA COMPONENTS(CARD, O LISTA DE CARDS(category: men / women), BARRA DE NAVEGACION).

//INICIO - PRODUCTOS - (TITLE E IMG) - DESCRIPCION

//CARDS ESTA DENTRO DE ---> MAIN ---> PAGE PRODUCTOS.JS (PRODUCTS())---> APP.JS
//CARDS ESTA DENTRO DE ---> DETAILS ---> PAGE PRODUCTDETAILS.JS ---> APP.JS
