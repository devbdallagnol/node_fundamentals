const databaseType = {
  userType: "admin",
  typeData: "dataLocal",
}

async function connectToDatabase(dataName) {
  // logica de conexao
  console.log(`Conectado ao banco ${dataName}!`);
}

async function disconnectDatabase() {
  // logica de desconexao
  console.log("Desconectado do banco!");
}

export { connectToDatabase, disconnectDatabase, databaseType };

// module.exports = {
//   connectToDatabase,
//   disconnectDatabase
// };
