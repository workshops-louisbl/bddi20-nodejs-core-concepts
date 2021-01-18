const {loadFile, loadFileCb} = require("./11_async_lib")

loadFileCb("./three.txt", (err, data) => {
  if (err) {
    return console.error(err)
  }
  console.log("three.txt: ", data)
})


loadFile("./three.txt")
  .then((data) => console.log("three.txt: ", data))
  .catch(err => console.error(err))


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

async function loadFileAsync() {
  let data = "No data"
  try{
    data = await loadFile("./three.txt");
  } catch(err) {
    console.error(err)
  }
  console.log("three.txt: ", data)
}

loadFileAsync()
