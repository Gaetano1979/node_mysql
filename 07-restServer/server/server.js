require('./config/config');

const express = require('express');
const app = express();
const path = require('path');

//creamos el vinculo con la rutas globlales
app.use(require('./routers/index'));

//creamos conection con mongoose
const mongoose = require('mongoose');

//declaramos el porto como costante 
const port = process.env.PORT || 3000;

//declaramos el parser 
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//habilitar la carpeta public 
app.use(express.static(path.resolve(__dirname, '../public')));
console.log(path.resolve(__dirname, '../public'));


app.get('/', function(req, res) {
    //res.send('Buenos dias a todos');
    //creamos un archivo json
    res.json('Buenos dias a todos en Local');
});



//creamos conection
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw new Error('Conession no establesida ' + err);
    console.log('Base de datos ONLINE');

});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el porto: ${process.env.PORT}`);

});