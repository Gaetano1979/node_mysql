const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



app.get('/', function(req, res) {
    //res.send('Buenos dias a todos');
    //creamos un archivo json
    res.json('Buenos dias a todos');
});
app.get('/usuarios', (req, res) => {
    res.json('Listas Usuarios');
});
app.post('/usuarios', (req, res) => {
    res.json('Pagina Post usuarios');
});
app.put('/usuarios', (req, res) => {
    res.json('Pagina Put Usuarios');
});
app.put('/usuarios/:id', (req, res) => {
    let idUsuario = req.params.id;
    res.json({
        id: idUsuario,

    });
})
app.delete('/usuarios', (req, res) => {
    res.json('Pagina Delete Usuarios');
});

app.listen(3000, () => {
    console.log(`Escuchando el porto: ${port}`);

});