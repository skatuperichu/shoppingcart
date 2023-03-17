import React, { useEffect, useState } from "react";
import PlantillaProductos from "../componentes/PlantillaProductos";

function Products() {
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

export default Products;

//HACER CARPETA PAGES (HOME, DETALLE, ABOUT)Y OTRA COMPONENTS(CARD, O LISTA DE CARDS(category: men / women), BARRA DE NAVEGACION).

//INICIO - PRODUCTOS - (TITLE E IMG) - DESCRIPCION

//CARDS ESTA DENTRO DE ---> MAIN ---> PAGE PRODUCTOS.JS (PRODUCTS())---> APP.JS
//CARDS ESTA DENTRO DE ---> DETAILS ---> PAGE PRODUCTDETAILS.JS ---> APP.JS
