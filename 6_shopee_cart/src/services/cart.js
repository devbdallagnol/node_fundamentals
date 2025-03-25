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
async function removeItem(userCart, index){
    // transforma o indice visual para o indice do backend
    const deleteIndex = index - 1;

    // é maior que 0 e menor que o tamanho do carrinho
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
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