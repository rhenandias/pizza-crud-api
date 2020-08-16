const express = require("express");
const routes = express.Router();

const PizzaController = require("./controllers/PizzaController");

routes.post("/pizzas", PizzaController.create);
routes.get("/pizzas", PizzaController.index);
routes.get("/pizzas/:id", PizzaController.show);
routes.put("/pizzas/:id", PizzaController.update);
routes.delete("/pizzas/:id", PizzaController.delete);

module.exports = routes;
