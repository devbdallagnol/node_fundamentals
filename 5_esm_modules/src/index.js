import { connectToDatabase, databaseType } from './utils/database.js';
import { getDataFromApi } from './utils/api.js';
import * as api from './utils/api.js';

console.log('Hello, Ecma!');
// connectToDatabase('MySQL'); // Conectado ao banco MySQL!

getDataFromApi(); // Dados da API sendo buscados ...!
api.getDataFromApi(); // Dados da API sendo buscados ...!