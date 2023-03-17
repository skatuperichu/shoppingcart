import React, { useEffect, useState } from "react";
import PlantillaProductos from "../componentes/PlantillaProductos";

function MenClothing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
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
              tilte={props.tilte}
              description={props.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MenClothing;
