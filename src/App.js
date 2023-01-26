import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./componentes/Navigation";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Products from "./pages/Productos";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/descripcion" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
