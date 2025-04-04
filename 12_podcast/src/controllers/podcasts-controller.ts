import { IncomingMessage, ServerResponse } from "http";

// listar os episódios
export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end({
        name: "podcast",
  });
};
