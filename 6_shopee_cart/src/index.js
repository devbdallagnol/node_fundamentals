import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log(' Welcome to the your Shopee Cart!');

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// adicionei 2 itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// deletei 2 itens do carrinho
await cartService.deleteItem(myCart, item2.name);
await cartService.deleteItem(myCart, item1.name);

console.log("Shopping Cart TOTAL is: ");
await cartService.calculateTotal(myCart);

