import React from "react";
import "./styles.css";

export default function NoResults() {
  return (
    <div className="noresults-div">
      <h1>Nenhum resultado encontrado</h1>
      <p>Houve algum erro, ou então todas as pizzas foram apagadas.</p>
      <p>Tente inserir uma nova pizza no banco de dados.</p>
    </div>
  );
}
