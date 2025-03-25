const product = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
  console.log("🛒 Carrinho de compras 🛒");
  //   p.getFullName("408", "mousepad");
  //   p.getFullName("508", "mouse");
  //   p.getProductLabel("teclado");

  console.log(product.productType);
  console.log(config.devArea);
  console.log(config.client);
  product.getFullName("408", "mousepad");
  product.getFullName("508", "mouse");
  product.getProductLabel("teclado");

  database.connectToDatabase("Products");
  database.disconnectDatabase();
}

main();
