// quais ações meu carrinho pode fazer?

// CASOS DE USO

// 1. ✅ -> Adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// 2. -> Calcular o total do carrinho
async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

// 3. -> Deletar o carrinho
async function deleteItem(userCart, name){}

// 4. -> Remover um item
async function removeItem(userCart, index){}

export { 
    addItem, 
    calculateTotal, 
    deleteItem, 
    removeItem 
};