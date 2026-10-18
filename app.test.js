const { calculateTotal } = require("./app");

if (calculateTotal(100, 2) !== 200) {
  throw new Error("Test failed: total calculation");
}

if (calculateTotal(50, 3) !== 150) {
  throw new Error("Test failed: multiple items");
}

console.log("All tests passed");
