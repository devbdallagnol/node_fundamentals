async function getBaseEmail(senderName: string) {
  let base = `Olá ${senderName}, gostaria de me inscrever para uma vaga`

  base += "\n estou deixando o meu currículo em anexo";

  return base;
}

export {getBaseEmail};