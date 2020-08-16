import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Functionality
import api from "../../services/api";

// Resources
import "./styles.css";
import Logo from "../../assets/pizza.svg";

// Composition componentes
import InputField from "../../components/InputField";
import PizzaCard from "../../components/PizzaCard";
import Select from "../../components/Select";
import Loading from "../../components/Loading";
import NoResults from "../../components/NoResults";

// Modal components
import NewPizza from "../../components/NewPizza";
import DeletePizza from "../../components/DeletePizza";
import EditPizza from "../../components/EditPizza";

export default function Home() {
  // Array for all pizzas, and mounted control
  const [pizzas, setPizzas] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Open/Close modal control
  const [newPizza, setNewPizza] = useState(false);
  const [deletePizza, setDeletePizza] = useState(false);
  const [editPizza, setEditPizza] = useState(false);

  // Pizza target for deletion and edition
  const [deletePizzaTarget, setDeletePizzaTarget] = useState({});
  const [editPizzaTarget, setEditPizzaTarget] = useState({});

  const [filter, setFilter] = useState("");

  // Load pizzas from database on page load
  useEffect(() => {
    loadPizzas();
  }, []);

  // Load pizzas functionality
  function loadPizzas() {
    api
      .get("/pizzas")
      .then((res) => {
        setPizzas(res.data);
        setMounted(true);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  }

  return (
    <div className="main">
      {/*  Modal Components */}
      <NewPizza
        show={newPizza}
        close={() => setNewPizza(false)}
        loadPizzas={loadPizzas}
      />
      <DeletePizza
        show={deletePizza}
        close={() => setDeletePizza(false)}
        target={deletePizzaTarget}
        loadPizzas={loadPizzas}
      />
      <EditPizza
        show={editPizza}
        close={() => setEditPizza(false)}
        target={editPizzaTarget}
        loadPizzas={loadPizzas}
      />

      {/*  Page Structure */}
      <header>
        <div className="div-logo">
          <h1>The Pizza API</h1>
          <img src={Logo} alt="Logotipo" />
        </div>
        <nav className="div-options">
          <Link to="/about">Sobre</Link>
          <a
            href="https://github.com/rhenandias/pizza-crud-api"
            target="_blank"
          >
            Github
          </a>
          <button onClick={() => setNewPizza(true)}>Nova Pizza</button>
        </nav>
      </header>
      <div className="separator" />
      <div className="search-section">
        <InputField
          type="text"
          width="40px"
          title="Procurar pizzas"
          placeHolder="Buscar uma pizza ou um ingrediente ;)"
          value={filter}
          onChange={setFilter}
        />
        <Select />
      </div>
      {mounted && (
        <div className="results">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza._id}
              pizza={pizza}
              remove={() => {
                setDeletePizzaTarget(pizza);
                setDeletePizza(true);
              }}
              edit={() => {
                setEditPizzaTarget(pizza);
                setEditPizza(true);
              }}
            />
          ))}
        </div>
      )}
      {!mounted && <Loading />}
      {mounted && pizzas.length < 1 && <NoResults />}
    </div>
  );
}
