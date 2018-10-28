const http = require('http');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'aplication/json' });

    let salida = {
        nombre: 'Gaetano',
        apellido: 'Sabino',
        email: 'gateano.sabino@gmail.com',
        url: req.url
    }
    res.write(JSON.stringify(salida));

    // res.write('Hola a todos');
    res.end();
}).listen('8080');

console.log('Creando el server en puerto 8080')