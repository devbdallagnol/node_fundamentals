const { getFullName, productType } = require("./services/products");
const products = require("./services/products");

const config = require("./services/config");
const database = require("./services/database");

async function main() {
  console.log("🛒 Carrinho de compras 🛒");

  getFullName("408", "mousepad");
  products.getFullName("508", "mouse");

  database.connectToDatabase("Products");
}

main();
