const p = require("./services/products");
const config = require("./services/config");

async function main() {
  console.log('🛒 Carrinho de compras 🛒');
//   p.getFullName("408", "mousepad");
//   p.getFullName("508", "mouse");
//   p.getProductLabel("teclado");

console.log(config.devArea);
console.log(config.client);
}

main();