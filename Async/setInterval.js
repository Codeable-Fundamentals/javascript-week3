var intervalID = setInterval(myCallback, 1500, "parámetro 1", "parámetro 2");

function myCallback(a, b) {
  console.log(a);
  console.log(b);
}
