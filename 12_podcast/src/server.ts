import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    
    //queryString
    //http://localhost:3636/api/episode?p=flow
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    console.log("baseUrl", baseUrl);
    console.log("queryString", queryString);

    // listar podcasts
    if (req.method === "GET" && baseUrl === "/api/list") {
      // chama o controller para listar os episódios
      await getListEpisodes(req, res);
    }

    // filtrar podcasts
    if (req.method === "GET" && baseUrl === "/api/episode") {
      // chama o controller para filtrar os episódios
      await getFilterEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
