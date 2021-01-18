// https://nodejs.org/dist/latest-v14.x/docs/api/events.html

const events = require("events")

const emitter = new events.EventEmitter()

function onEvent2() {
  console.log("event 2 fired")
}

emitter.on("event1", () => {
  console.log("event 1 fired");
})

emitter.on("event2", onEvent2)

emitter.emit("event1")
emitter.emit("event2")

console.log(emitter.listeners("event1"))
console.log(emitter.listeners("event2"))
emitter.removeListener("event2", onEvent2 )
console.log(emitter.listeners("event2"))

emitter.removeAllListeners("event1")

emitter.emit("event1")
emitter.emit("event2")

emitter.once("event1", () => {
  console.log("only once")
})
emitter.emit("event1")
emitter.emit("event1")

// https://nodejs.org/dist/latest-v14.x/docs/api/process.html#process_event_uncaughtexception

process.on("uncaughtException", (err, origin) => {
  console.error("Planté : ", err)
})

// someFunc() // => trigger uncaughtException