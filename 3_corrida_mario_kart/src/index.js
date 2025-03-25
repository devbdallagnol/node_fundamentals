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
  let result;

  switch (true) {
    case random < 0.33:
      result = "⬆️ RETA";
      break;
    case random < 0.66:
      result = "⤴️ CURVA";
      break;
    default:
      result = "💣 CONFRONTO";
      break;
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`-> ${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
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

    if (block === "⬆️ RETA") {
      testSkill1 = character1.VELOCIDADE + dice1;
      testSkill2 = character2.VELOCIDADE + dice2;

      await logRollResult(character1.NOME, "VELOCIDADE", dice1, character1.VELOCIDADE);
      await logRollResult(character2.NOME, "VELOCIDADE", dice2, character2.VELOCIDADE);
    }

    if (block === "⤴️ CURVA") {
      testSkill1 = character1.MANOBRABILIDADE + dice1;
      testSkill2 = character2.MANOBRABILIDADE + dice2;

      await logRollResult(character1.NOME, "MANOBRABILIDADE", dice1, character1.MANOBRABILIDADE);
      await logRollResult(character2.NOME, "MANOBRABILIDADE", dice2, character2.MANOBRABILIDADE);
    }

    if (block === "💣 CONFRONTO") {
      let powerResult1 = character1.PODER + dice1;
      let powerResult2 = character2.PODER + dice2;

      console.log(`-> ${character1.NOME} confrontou com ${character2.NOME} 🥊`);

      await logRollResult(character1.NOME, "PODER", dice1, character1.PODER);
      await logRollResult(character2.NOME, "PODER", dice2, character2.PODER);
      
      if(powerResult1 > powerResult2 && character2.PONTOS > 0){
        character1.PONTOS++;
        character2.PONTOS--;
        console.log(`${character1.NOME} venceu o confronto! | ${character2.NOME} PERDEU um ponto! 🐢`);
      }

      if(powerResult1 < powerResult2 && character1.PONTOS > 0){
        character1.PONTOS--;
        character2.PONTOS++;
        console.log(`${character2.NOME} venceu o confronto! | ${character1.NOME} PERDEU um ponto! 🐢`);
      }

      if (powerResult1 === powerResult2) {
        console.log("Empate!");
      }

      testSkill1 = powerResult1;
      testSkill2 = powerResult2;
    }

    // verificar vencedor
    if (testSkill1 > testSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    }else if (testSkill1 < testSkill2) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }else {
      console.log("Empate!");
    }

    console.log("_______________________________________________________")
  }
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
  );

  await playRaceEngine(player1, player2);
})();
