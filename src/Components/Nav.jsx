import { Link } from "react-router-dom";
export default function Nav() {
    return (
      <div>
        <h1>Ecommerce</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Productos</Link> |{" "}
          <Link to="/carrito">Carrito</Link>
        </nav>
      </div>
    );
  }