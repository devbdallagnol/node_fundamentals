// todas as funcoes que lidam com a api de produtos
async function getFullName(codeId, productName) {
    
    console.log("products: " + codeId + ' -- ' + productName);
}

async function getProductLabel(productName){
    console.log("products: " + productName);
}

module.exports = {
    getFullName,
    getProductLabel
};