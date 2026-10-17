import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="cabecalho">
      <h1 className="cabecalho-logo">K-Store</h1>

      <nav className="cabecalho-menu">
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
