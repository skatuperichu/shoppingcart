import { BsFillCartFill } from "react-icons/bs";
function Home() {
  return (
    <>
      <div>
        <h3>Bienvenido a </h3>
        <h1>Carrito de Compras 3.0</h1>
      </div>
      <div>
        <BsFillCartFill className="carrito" />
      </div>
    </>
  );
}

export default Home;
