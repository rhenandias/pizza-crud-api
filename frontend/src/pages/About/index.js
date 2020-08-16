import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Logo from "../../assets/pizza.svg";

export default function About() {
  return (
    <div className="main">
      <header>
        <div className="div-logo">
          <h1>The Pizza API</h1>
          <img src={Logo} alt="Logotipo" />
        </div>
        <nav className="div-options">
          <Link to="/">Página Inicial</Link>
          <a
            href="https://github.com/rhenandias/pizza-crud-api"
            target="_blank"
          >
            Github
          </a>
        </nav>
      </header>

      <div className="separator" />
    </div>
  );
}
