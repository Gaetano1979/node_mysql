let getNombre = async() => {
    return 'Gaetano';
}

let getNombre1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Gaetano ')
        }, 3000);
    })
}
let saludo = async() => {
    let nombre = await getNombre1();
    return `Hola, bienvenido ${nombre}`;
}

// console.log(getNombre());
// getNombre1().then(nombre => {
//     //creamos un error
//     //undefined.nombre
//     console.log(nombre);

// }).catch(e => {
//     console.log('Error de async', e);

// })
saludo().then(mensaje => {
    console.log(mensaje);

})