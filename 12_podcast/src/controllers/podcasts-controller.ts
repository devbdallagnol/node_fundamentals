import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from '../services/list-episodes-services';

// listar os episódios
export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const content = await serviceListEpisodes();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(content)
);
};
