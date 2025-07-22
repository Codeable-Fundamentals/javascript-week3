setTimeout(() => console.log("Tarea programada!!!"), 0);

function counter(n) {
  for (let i = 0; i < n; i++) {
    console.log("numero : ", i);
  }
}

console.log("Antes de la planificación");

console.log("Después de la planificación");

console.log("Mucho después de la planificación");

counter(1000);
