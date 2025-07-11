const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);

console.log("-------- otro ejemplo -------");
const users = [
  {
    id: 1,
    name: "grecia",
    edad: 28,
  },
  {
    id: 2,
    name: "Victoria",
    edad: 23,
  },
  {
    id: 3,
    name: "Frabicio",
    edad: 27,
  },
  {
    id: 4,
    name: "Estudardo",
    edad: 45,
  },
  {
    id: 5,
    name: "Rel",
    edad: 50,
  },
];

// oye quiero la lista de personas que sean mayor de 30 años

const resp = users.filter((user) => user.edad >= 30);
console.log(resp);
