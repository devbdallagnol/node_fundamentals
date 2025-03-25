// CASOS DE USO DOS ITEMS

// 1. -> Criar um item com subtotal certo
async function createItem(name, price, quantity){
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    };
}

export default createItem;