const mongoose = require("mongoose");

const Pizza = mongoose.model("Pizza");

module.exports = {
  // Create and include a new pizza
  async create(req, res) {
    await Pizza.create(req.body)
      .then((pizza) => {
        res.status(201).send(pizza);
      })
      .catch((error) => {
        res.status(400).send({
          status: 400,
          error: "Erro durante a criação da pizza",
          message: error.message,
        });
      });
  },

  // List all pizzas
  async index(req, res) {
    await Pizza.find()
      .then((pizzas) => {
        res.status(200).send(pizzas);
      })
      .catch((error) => {
        res.status(500);
        send({
          error: "Erro no pedido de listagem de pizzas",
          message: error.message,
        });
      });
  },

  // List a pizza by id
  async show(req, res) {
    await Pizza.findById(req.params.id)
      .then((pizza) => {
        res.status(200).send(pizza);
      })
      .catch((error) => {
        res.status(400).send({
          error: "Erro no pedido de exibição de pizza por ID",
          message: error.message,
        });
      });
  },

  // Update a pizza
  async update(req, res) {
    await Pizza.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((pizza) => {
        res.status(200).send(pizza);
      })
      .catch((error) => {
        res.status(400).send({
          error: "Erro no pedido de atualização de pizza",
          message: error.message,
        });
      });
  },

  // Delete a pizza
  async delete(req, res) {
    await Pizza.findByIdAndRemove(req.params.id)
      .then(() => {
        res.status(200).send({
          message: "A pizza foi removida com sucesso dos registros",
        });
      })
      .catch((error) => {
        res.status(400).send({
          error: "Erro ao apagar pizza",
          message: error.message,
        });
      });
  },
};
