import fastify from "fastify";

const server = fastify({logger: true});

// listar as equipes de f1
// implentar o verbo http GET
// preciso passar uma rota para ele
// preciso criar meu controller
server.get("/teams", async(request, response) => {
    response.type("application/json").code(200)

    return [
        {id: 1, name: "Ferrari"},
    ]
})

// escutar alguma porta, para o q algum client possa se comunicar com ele
server.listen({port: 3333}, ()=>{
    console.log("Server init")
})
