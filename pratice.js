let names = ["ram", "shyam", "hari"]

// console.log(names.find(n => n === "ram"))
// ^ names
// console.log(names.filter(n => n === "ram"))
// console.log(names.filter(n => n !== "ram"))
// console.log(names.map(n => n === "ram"))
// console.log(names.map(n => `<h2>${n}</h2>`))
console.log(names.map(function (n) {
    return `<h2>${n}</h2>`
}))
// => is a function