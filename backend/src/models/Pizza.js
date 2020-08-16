const mongoose = require("mongoose");

const PizzaSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
	createdAt: {
		type: Date,
    default: Date.now,
    required: false
	}
});

mongoose.model("Pizza", PizzaSchema);
