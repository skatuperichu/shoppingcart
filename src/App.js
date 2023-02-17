import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./componentes/Navigation";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Products from "./pages/Productos";
import ContactPage from "./pages/ContactPage";
import Contact from "./componentes/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/descripcion" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*Como hacer para que al apretar el boton de Ver, me redireccione a una pagina con el producto seleccionado
y su descripcion?.
Como desestructurar la api?, osea separar a cada producto, cada texto, descripcion, etc. */
