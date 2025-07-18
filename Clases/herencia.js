let abuelo = {
  apellido: "Bolivar"
};
 
let padre = Object.create(abuelo) // abuelo es prototipo de padre
 
let hijo = Object.create(padre) // padre es prototipo de hijo
 
console.log(hijo.apellido); // "Bolivar"