import { Link } from "react-router-dom";
import "../hojas-de-estilo/Navbar.css";
import { BsFillCartFill } from "react-icons/bs";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <BsFillCartFill style={{ marginBottom: "6px" }} />
      </a>
      <header class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" style={{ alignItems: "center" }}>
          <li>
            <Link class="nav-link" to="/">
              <strong>Inicio</strong> <span class="sr-only" />
            </Link>
          </li>
          <ul className="navbar-nav" style={{ alignItems: "center" }}>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Categorías
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/womenclothing">
                    Ropa para mujer
                  </Dropdown.Item>
                  <Dropdown.Item href="/menclothing">
                    Ropa para hombre
                  </Dropdown.Item>
                  <Dropdown.Item href="/jewelery">Joyas</Dropdown.Item>
                  <Dropdown.Item href="/electronics">Electrónica</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/productos">
                    Todos los productos
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Link class="nav-link" to="/contact">
                <button type="button" class="btn btn-info">
                  Contacto
                </button>
              </Link>
            </li>
          </ul>
        </ul>
      </header>
    </nav>
  );
}

export default Header;
