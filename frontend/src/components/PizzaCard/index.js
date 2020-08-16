import React from "react";
import "./styles.css";

import Edit from "../../assets/edit.svg";
import Trash from "../../assets/trash.svg";

export default function PizzaCard(props) {
  let { title, ingredients, price } = props.pizza;
  const { edit, remove } = props;
  ingredients = ingredients.join(", ");
  return (
    <div className="card">
      <p id="title">{title}</p>
      <p id="ingredients">{ingredients}</p>
      <p id="price">
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </p>
      <div id="card-options">
        <a onClick={edit}>
          <img src={Edit} />
          Editar
        </a>
        <a onClick={remove}>
          <img src={Trash} />
          Remover
        </a>
      </div>
    </div>
  );
}
