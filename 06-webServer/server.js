const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(req, res) {
    // res.send('Hello World');
    let salida = {
        nombre: 'Gaetano',
        apellido: 'Sabino',
        email: 'gaetano.gmail',
        url: req.url
    };

    res.send(salida);
});

app.get('/data', (req, res) => {
    res.send('Hola a Todos en Datas');
});

app.listen(PORT, () => {
    console.log(`Escuchando el porto ${PORT}`);

});