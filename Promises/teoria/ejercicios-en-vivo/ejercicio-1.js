function prepararPizza(ingrediente) {
  return new Promise((resolve, reject) => {
    console.log(`🏁 La pizza de ${ingrediente} se esta preparando...`);

    const ingredientesValidos = [
      "peperoni",
      "piña",
      "salame",
      "trucha",
      "queso",
      "jamon",
    ];

    // simular la demora de la prepracion de la pizza, que demora 4 segundos
    setTimeout(() => {
      const isPizzaValid = ingredientesValidos.includes(ingrediente);
      if (!isPizzaValid) {
        reject(`❌ La pizza de ${ingrediente}, no la tenemos 🍕😥`);
        return;
      }

      resolve(`✅ La pizza de ${ingrediente}, ya esta lista!👨‍🍳`);
    }, 4000);
  });
}

// Caso 1: El usurio si manda una pizza de sabor valido
prepararPizza("piña")
  .then((pizza) => {
    console.log(pizza);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Gracias por pedir en Pizzas Lima!"));

// caso 2: Error Si andamos una pizza fuera del catalogo
prepararPizza("cerdo")
  .then((pizza) => console.log(pizza))
  .catch((error) => console.log(error))
  .finally(() => console.log("Gracias por pedir en Pizzas Lima!"));
