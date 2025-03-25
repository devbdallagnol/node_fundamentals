// todas as funcoes que lidam com a api de produtos
async function getFullName(codeId, productName) {
  return codeId + ' -- ' + productName;
}

module.exports = {
    getFullName
};