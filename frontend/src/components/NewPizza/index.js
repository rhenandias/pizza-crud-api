import React, { useContext, useState } from "react";
import api from "../../services/api";
import Validation from "../../services/validation";

import "./styles.css";

import InputField from "../InputField";
import Modal from "../Modal";

export default function NewPizza(props) {
  const { show, close, loadPizzas } = props;

  // Pizza properties
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");

  async function saveNewPizza() {
    // @TODO: make consistent sanitazer module, to use on backend as well

    console.log("Iniciando validação");
    let validationHealth = true;

    // Title Validation
    const titleValidation = Validation.title(title);
    if (titleValidation !== "OK") {
      console.log(titleValidation);
      validationHealth = false;
    }

    // Ingredients Validation
    const ingredientsValidation = Validation.ingredients(ingredients);
    if (ingredientsValidation !== "OK") {
      validationHealth = false;
      console.log(ingredientsValidation);
    }

    // Price Validation
    const priceValidation = Validation.price(price);
    if (priceValidation !== "OK") {
      validationHealth = false;
      console.log(priceValidation);
    }

    if (!validationHealth) return;

    // Make ingredients array
    let ingredientsSplited = ingredients.split(",");
    let ingredientsTrimed = ingredientsSplited.map((a) => a.trim());

    // Make final pizza object
    const newPizza = {
      title,
      ingredients: ingredientsTrimed,
      price: parseFloat(price.replace(",", ".")),
    };

    // Post the new pizza into the API
    api
      .post("/pizzas", newPizza)
      .then((res) => {
        close();

        setTitle("");
        setIngredients("");
        setPrice("");

        loadPizzas();
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        console.log(error.response.data);
      });
  }

  return (
    <Modal show={show} close={close} confirm={() => saveNewPizza()}>
      <div className="new-pizza-root">
        <h1>Nova pizza?!</h1>
        <form onSubmit={saveNewPizza}>
          <InputField
            title="Nome"
            type="text"
            margin="30px 0 0 0"
            placeHolder="Qual é o sabor dessa pizza?"
            value={title}
            onChange={setTitle}
          />
          <InputField
            title="Ingredientes"
            type="text"
            margin="30px 0 0 0"
            placeHolder="Separados por vírgulas ;)"
            value={ingredients}
            onChange={setIngredients}
          />
          <InputField
            id="new-pizza-input-field"
            title="Preço"
            type="text"
            margin="30px 0 0 0"
            placeHolder="Tomara que não seja muito cara!"
            value={price}
            onChange={setPrice}
          />
        </form>
      </div>
    </Modal>
  );
}
