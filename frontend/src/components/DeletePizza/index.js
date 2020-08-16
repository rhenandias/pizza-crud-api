import React from "react";
import api from "../../services/api";

import "./styles.css";

import Modal from "../Modal";

export default function DeletePizza(props) {
  const { show, close, loadPizzas, target } = props;

  function deletePizza() {
    api
      .delete(`/pizzas/${target._id}`)
      .then((res) => {
        close();
        loadPizzas();
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        console.log(error.response.data);
      });
  }

  return (
    <Modal
      show={show}
      close={close}
      confirmTitle="Remover"
      confirm={() => deletePizza()}
    >
      <div className="delete-pizza-root">
        <h1>Não gosta dessa pizza??</h1>
        <h1>{target.title}</h1>
        <p>Todas suas informações serão removidas do banco de dados</p>
        <p>
          Ei, não apague todas as pizzas, deixe algumas de demonstração para
          outras pessoas verem ;)
        </p>
      </div>
    </Modal>
  );
}
