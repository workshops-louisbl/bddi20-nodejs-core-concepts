console.log("start")

const start = Date.now()

setTimeout(() => console.log("setTimeout end"), 0)

for( let i = 1; i < 1000000;i++) {
  //
}

const end = Date.now()

console.log("end")

console.log(end - start)