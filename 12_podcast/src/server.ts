import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    // listar podcasts
    if (req.method === "GET" && req.url === "/api/list") {
      // chama o controller para listar os episódios
      await getListEpisodes(req, res);
    }

    // filtrar podcasts
    if (req.method === "GET" && req.url === "/api/episode") {
      // chama o controller para filtrar os episódios
      await getFilterEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
