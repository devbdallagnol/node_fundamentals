import chalk from "chalk";

async function createPassword(password) {
  console.log(chalk.green("Password created successfully"));
  const password = await handle();
  console.log(chalk.green("Password: " + password));
}


export default createPassword;