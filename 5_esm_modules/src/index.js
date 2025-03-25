import { connectToDatabase, databaseType } from './utils/database.js';

console.log('Hello, Ecma!');
// connectToDatabase('MySQL'); // Conectado ao banco MySQL!

connectToDatabase('MySQL'); // Conectado ao banco MySQL!

databaseType.userType = 'user';
console.log(databaseType.userType); // user