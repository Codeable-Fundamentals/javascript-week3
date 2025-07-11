let arr = [1, 2, 3, 4, 5, 6];

// resp : [2,4,6,8,10,12]

console.log("-------OPCION 1 : for --------");
function multiplicarPorDos() {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const numberX2 = arr[i] * 2;
    newArr.push(numberX2);
  }

  return newArr;
}

const resp = multiplicarPorDos(arr);
console.log("Esta es la respuesta: ", resp);

console.log("-------OPCION 2 : usando HOF --------");

const por2 = (e) => e * 2;
const resp2 = arr.map(por2);
console.log("Esta es la respuesta OP2: ", resp2);
console.log("Arreglo original: ", arr);
