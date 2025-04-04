import { IncomingMessage, ServerResponse } from "http";

// listar os episódios
export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([
        {
            podcastName: "flow",
            episode: "CBUM - flow #319",
            videoId: "pQSuQmUfS30",
            categories: ["saúde", "esporte", "bodybuilder"],
        },
        {
            podcastName: "flow",
            episode: "RUBENS BARRICHELLO - Flow #339",
            videoId:"4KDGTdiOV4I",
            categories: ["esporte", "corrida"]
        },
    ])
);
};
