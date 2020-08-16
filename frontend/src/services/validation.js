class Validation {
  title(title) {
    if (!title) {
      return "Essa pizza não tem um nome?";
    }
    if (typeof title !== "string" || !title instanceof String) {
      return "O título da pizza precisa ser um texto";
    }
    if (title.length > 20) {
      return "Tamanho máximo de 20 caracteres";
    }
    return "OK";
  }

  ingredients(ingredients) {
    if (!ingredients) {
      return "Quais são os ingredientes?";
    }
    if (ingredients.length > 100) {
      return "Tamanho máximo de 50 caracteres";
    }
    return "OK";
  }

  price(price) {
    if (!price) {
      return "Pizza de graça??";
    }
    if (isNaN(parseFloat(price.replace(",", ".")))) {
      return "Preços geralmente são números ...";
    }
    if (parseFloat(price.replace(",", ".")) > 100) {
      return "Preço máximo de R$100,00";
    }

    return "OK";
  }
}

export default new Validation();
