let fruit_names = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];


console.log(fruit_names[0])
console.log(fruit_names[1])

console.log(fruit_names[fruit_names.length-1])

console.log("------------------")
fruit_names.forEach((element)=>{
  console.log(element)
})

console.log("----------PUSH--------")
fruit_names.push("Orange")
console.log(fruit_names)

console.log("----------POP--------")
fruit_names.pop()
console.log(fruit_names)

console.log("----------unshift--------")
fruit_names.unshift("Fresa")
console.log(fruit_names)

console.log("----------shift--------")
fruit_names.shift()
console.log(fruit_names)


console.log("----------Index of --------")
let resp = fruit_names.indexOf("Cherry")
console.log(resp)