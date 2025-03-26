import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import chalk from 'chalk';

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) console.log("Escolheu o QRCode");
    if (choose.select == 2) console.log("Escolheu o PASSWORD");
    prompt.start();
  });
}

main();
