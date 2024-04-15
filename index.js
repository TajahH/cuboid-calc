const readline = require("readline-sync");
let height = parseInt(readline.question("Please enter the height of the cuboid in metres: "))
let width = parseInt(readline.question("Please enter the width of the cuboid in metres: "))
let length = parseInt(readline.question("Please enter the length of the cuboid in metres: "))

let cuboidVolume = height * width * length;
let surfaceArea = cuboidVolume*2

console.log(`The volume of the cuboid is ${cuboidVolume}m2 and the surface area is ${surfaceArea}m2.`)
