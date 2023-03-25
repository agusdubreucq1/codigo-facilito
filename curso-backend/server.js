const http = require('http');

function responderPeticion(request, response){
    response.end('peticion respondida');
}

let server = http.createServer(responderPeticion);

server.listen(3000);