const express = require('express');
const app = express();
//para subir una app a un server remoto tenfremos que modificar esta variable
// const PORT = 3000;
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // res.send('Hello World');
    // let salida = {
    //     nombre: 'Gaetano',
    //     apellido: 'Sabino',
    //     email: 'gaetano.gmail',
    //     url: req.url
    // };

    // res.send(salida);
    res.render('home', {
        nombre: 'Gaetano'
    });
});

app.get('/data', (req, res) => {
    res.send('Hola a Todos en Datas');
});

app.listen(port, () => {
    console.log(`Escuchando el porto ${port}`);

});