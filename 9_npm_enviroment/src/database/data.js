async function connectToDatabase(user, password) {
  if (
    user === process.env.USERDATABASE &&
    password === process.env.PASSWORDDATABASE
  ) {
    console.log("Conexao com o banco de dados realizada com sucesso!");
  } else {
    console.log(
      "Falha de login! Não foi possivel se conectar ao banco de dados!"
    );
  }
}

export default connectToDatabase;