import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import PlantillaProductos from "../componentes/PlantillaProductos";

function WomenClothing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.log(e));
  }, [setData]);

  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((props) => {
          return (
            <PlantillaProductos
              key={props.id}
              productID={props.id}
              image={props.image}
              description={props.description}
              title={props.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WomenClothing;
