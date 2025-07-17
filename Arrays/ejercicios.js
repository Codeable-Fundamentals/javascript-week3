function agregarComidaRapida(array) {
  // tu código aquí
  array.unshift("🍕");
  array.push("🍔")

  return array;
}
 
console.log(agregarComidaRapida(["🌭", "🍟"])); // ["🍕", "🌭", "🍟", "🍔"]