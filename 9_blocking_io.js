// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

const fs = require("fs")

const one = fs.readFileSync("./one.txt", "utf8")
console.log("one.txt: ", one)

try {
  const two = fs.readFileSync("./two.txt", "utf8")
  console.log("two.txt: ", two)
} catch (error) {
  console.error(error)
}

const three = fs.readFileSync("./three.txt", "utf8")
console.log("three.txt: ", three)
