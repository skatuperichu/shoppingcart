import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./componentes/Navigation";
import Main from "./componentes/Main";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
