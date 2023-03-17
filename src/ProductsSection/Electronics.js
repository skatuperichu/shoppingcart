import React, { useEffect, useState } from "react";
import PlantillaProductos from "../componentes/PlantillaProductos";

function Electronics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((props) => {
          return (
            <PlantillaProductos
              key={props.id}
              productID={props.id}
              image={props.image}
              title={props.title}
              description={props.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Electronics;
