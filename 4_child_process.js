// https://nodejs.org/dist/latest-v14.x/docs/api/child_process.html

const { exec }  = require("child_process")
// const childProcess = require("child_process")
// const exec = childProcess.exec

const pwd = exec("pwd", (error, stdout, stderr) => {
  if (error) {
    console.log(error.stack)
    console.log(error.code)
  }
  
  console.log("résultat commande : ", stdout)
})

pwd.on("exit", (code) => {
  console.log("pwd terminé 2 : ", code)
})
pwd.on("exit", (code) => {
  console.log("pwd terminé 1 : ", code)
})


console.log("dans JS")
