import React, { useEffect, useState } from "react";
import PlantillaProductos from "../componentes/PlantillaProductos";

function Jewelery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
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

export default Jewelery;
