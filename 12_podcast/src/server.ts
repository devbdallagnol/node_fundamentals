import * as http from 'http';
import { getListEpisodes } from './controllers/podcasts-controller';

const server = http.createServer( 
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        if (req.method === 'GET'){
            // chama o controller para listar os episódios
           await getListEpisodes(req, res);
        }
    }
);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})