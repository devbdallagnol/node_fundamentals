// export default

exports.connectToDatabase = (dataName) => {
  console.log('Se conectando ao banco de dados:' + dataName);
}

exports.disconnectDatabase = () => {
    // logicas de desconexao
    console.log('Desconectando do banco de dados');
}