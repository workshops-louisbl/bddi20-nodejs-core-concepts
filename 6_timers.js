// https://nodejs.org/dist/latest-v14.x/docs/api/timers.html

console.log("start")

function timeUp() {
  setImmediate(() => console.log("immediate"))
  setTimeout(() => console.log("timeout"), 0)
  // setInterval(() => {
  //   console.log("interval")
  // }, 500);
  process.nextTick(()=> console.log("next tick"))
  console.log("timeUp end")
}

function timeUp1() {
  setImmediate(() => console.log("immediate 1"))
  setTimeout(() => console.log("timeout 1"), 0)
  process.nextTick(() => console.log("next tick 1"))
  console.log("timeUp 1 end")
}

function timeUp2() {
  setImmediate(() => console.log("immediate 2"))
  setTimeout(() => console.log("timeout 2"), 0)
  process.nextTick(() => console.log("next tick 2"))
  console.log("timeUp 2 end")
}

timeUp()
timeUp1()
timeUp2()

console.log("end")