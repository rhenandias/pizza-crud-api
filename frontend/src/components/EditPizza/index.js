import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./styles.css";

import Modal from "../Modal";
import InputField from "../InputField";

export default function EditPizza(props) {
  const { show, close, target, loadPizzas } = props;

  const [title, setTitle] = useState();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    let { ingredients, title, price } = target;

    if (ingredients) {
      ingredients = ingredients.join(", ");
    }

    if (price) {
      price = price.toString();
    }

    setTitle(title);
    setIngredients(ingredients);
    setPrice(price);
  }, [props]);

  function editPizza() {
    // Sanitarize ingredients array
    let ingredientsSplited = ingredients.split(",");
    let ingredientsTrimed = ingredientsSplited.map((a) => a.trim());

    const editedPizza = {
      title,
      ingredients: ingredientsTrimed,
      price: parseFloat(price.replace(",", ".")),
    };

    // Update pizza
    api
      .put(`/pizzas/${target._id}`, editedPizza)
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
    <Modal show={show} close={close} confirm={() => editPizza()}>
      <div className="edit-pizza-root">
        <h1>Há algo errado??</h1>
        <InputField
          type="text"
          title="Nome"
          margin="30px 0 0 0"
          value={title}
          onChange={setTitle}
        />
        <InputField
          type="text"
          title="Ingredientes"
          margin="30px 0 0 0"
          value={ingredients}
          onChange={setIngredients}
        />
        <InputField
          type="text"
          title="Preço"
          margin="30px 0 0 0"
          value={price}
          onChange={setPrice}
        />
      </div>
    </Modal>
  );
}
