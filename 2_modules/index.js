// https://nodejs.org/dist/latest-v14.x/docs/api/packages.html

console.log("Main module")

const lib = require("./subfolder")

const result = lib.addFun(2,3) // exception: addFun is not exported
console.log(result)

lib.add()
lib.minus()