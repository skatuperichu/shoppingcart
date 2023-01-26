import { Link } from "react-router-dom";
import "../hojas-de-estilo/Navbar.css"

export default function Navigation() {
  return (
    <div className="navbar">
      <Link className="nav-link" to="/">Inicio</Link>
    </div>
  );
}
