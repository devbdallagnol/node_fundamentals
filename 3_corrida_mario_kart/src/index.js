const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result

  switch (true) {
    case random < 0.33:
      result = "⬆️ RETA"
      break;
    case random < 0.66:
      result = "⤴️ CURVA"
      break;
    default:
      result = "💣 CONFRONTO"
      break;
  }

  return result;
}

async function playRaceEngine(character1, character2){
  for(let round = 1; round <= 5; round++){
    console.log(`🏁 Rodada ${round} 🏁`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco sorteado: ${block}`);

    // rolar os dados
    let dice1 = await rollDice();
    let dice2 = await rollDice();

    // teste de habilidade
    let testSkill1 = 0;
    let testSkill2 = 0;

    if(block === "⬆️ RETA"){
      testSkill1 = character1.VELOCIDADE + dice1;
      testSkill2 = character2.VELOCIDADE + dice2;
    }
    else if(block === "⤴️ CURVA"){
      testSkill1 = character1.MANOBRABILIDADE + dice1;
      testSkill2 = character2.MANOBRABILIDADE + dice2;
    }
    else if(block === "💣 CONFRONTO"){
      testSkill1 = character1.PODER + dice1;
      testSkill2 = character2.PODER + dice2;
    }
  }
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

  await playRaceEngine(player1, player2);
  })();