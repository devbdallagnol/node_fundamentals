import connectToDatabase from "./database/data";

async function main(){
    await connectToDatabase('sasuke', 'uchiha');
}

main();