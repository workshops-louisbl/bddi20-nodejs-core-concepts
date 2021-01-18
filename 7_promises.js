// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

console.log("start")
process.nextTick(() => console.log("next tick 1"))
setTimeout(() => {
  console.log("setTimeout1")

  setTimeout(()=>console.log("timeout2"), 0)

  Promise.resolve()
    .then(() => {
      console.log("Promise 1 resolved")
    })

}, 0)