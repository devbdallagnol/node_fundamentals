async function connectToDatabase(user, password){
    if(user === 'naruto' && password === 'uzumaki'){
        console.log('Conexao com o banco de dados realizada com sucesso!');
    }else{
        console.log('Falha de login! Não foi possivel se conectar ao banco de dados!');
    }
}

export default connectToDatabase;