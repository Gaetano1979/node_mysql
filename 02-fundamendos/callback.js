// setTimeout(function() {
//         console.log('Hola a todos con function en 3 sec');
//     }, 3000)
//     //***************************/
//     //creamolos con flecha
// setTimeout(() => {
//     console.log('Hola a todos con flecha en 2,5 segundos');

// }, 2500);

let getByElement = (id, callback) => {
    let usuario = {
        nombre: 'Gaetano',
        id //en la nueva tipologia possiamo mettere solo id:id
    }
    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la BD`)
    } else {
        callback(null, usuario);
    }
}

getByElement(20, (err, usuario) => {
    if (err) {
        return console.log(err);

    }
    console.log('Usuario de base de datos', usuario);

})