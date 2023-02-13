import { Link } from "react-router-dom";
import "../hojas-de-estilo/Navbar.css";
import { BsFillCartFill } from "react-icons/bs";

export default function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <BsFillCartFill />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              <strong>Inicio</strong> <span class="sr-only" />
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/productos">
              Productos
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/descripcion">
              Descripción
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
