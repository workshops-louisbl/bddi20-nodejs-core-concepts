// https://nodejs.org/dist/latest-v14.x/docs/api/http.html

const { createServer } = require("http")
const fs = require("fs/promises")

const server = createServer()

server.on("request", async (request, response) => {
  console.log("on request", request.method, request.url)

  if (request.url === "/") {
    const file = await fs.readFile("./index.html", "utf8")
    response.writeHead(200)
    response.end(file)
  } else if (request.url === "/api/data.json") {
    response.writeHead(200, {"Content-Type": "application/json"})

    const data = {
      data: {
        prop: "value"
      }
    }
    response.end(JSON.stringify(data))
  } else {
    response.writeHead(404)
    response.end()
  }
})

server.listen(3000)
