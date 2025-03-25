// quais ações meu carrinho pode fazer?

// CASOS DE USO

// 1. ✅ -> Adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// 2. -> Calcular o total do carrinho
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁 Total: ${result}`);
}

// 3. -> Deletar o carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex(item => item.name === name);
    
    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// 4. -> Remover um item
async function removeItem(userCart, item){
    
    // 1. Encontrar o index do item
    const indexFound = userCart.findIndex((prod) => prod.name === item.name);
    
    // 2. Caso nao encontre o item
    if(indexFound === -1){
        console.log("Item não encontrado!");
        return;
    }

    // 3. Item > 1 subtrair 1 item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity-= 1;
        return;
    }

    // 4. Item === 1 deletar item
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
        return;
    }

}

async function displayCart(userCart){
    console.log("\nShopee cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Qtd: ${item.quantity}x | Subtotal: R$ ${item.subtotal()}`);
    });
}


export { 
    addItem, 
    calculateTotal, 
    deleteItem, 
    removeItem,
    displayCart 
};