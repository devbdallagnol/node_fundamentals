// todas as funcoes que lidam com a api de produtos
const productType = {
    version: 'digital',
    tax: "x1"
}

const apiURL = {
    url: 'www.google.com/api',
}

async function getFullName(codeId, productName) {
    console.log("products: " + codeId + ' -- ' + productName);
    await doBreakLine();
}

// hidden function
async function doBreakLine() {
    console.log("\n");
}

async function getProductLabel(productName){
    console.log("products: " + productName);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType
};