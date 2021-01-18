const fs = require("fs")
const fsPromise = require("fs/promises")

function loadFile(path) {
  const fileLoading = fsPromise.readFile(path, "utf8")

  return fileLoading
}

function loadFileCb(path, cb) {
  fs.readFile(path, "utf8", cb)
}

module.exports = {
  loadFile,
  loadFileCb
}