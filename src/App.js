//Librerias
import { Route, Routes } from "react-router-dom";

//CSS
import "./App.css";

//Componentes
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Contact from "./componentes/Contact";
import Products from "./ProductsSection/Products";
import DetailCard from "./ProductsSection/DetailsProducts/DetailCard";
import MenClothing from "./ProductsSection/MenClothing";
import WomenClothing from "./ProductsSection/WomenClothing";
import Jewelery from "./ProductsSection/Jewelery";
import Electronics from "./ProductsSection/Electronics";

function App() {
  return (
    <>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/descripcion/:id" element={<DetailCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menclothing" element={<MenClothing />} />
        <Route path="/womenclothing" element={<WomenClothing />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </>
  );
}

export default App;

/*Como hacer para que al apretar el boton de Ver, me redireccione a una pagina con el producto seleccionado
y su descripcion?.
Como desestructurar la api?, osea separar a cada producto, cada texto, descripcion, etc. */
