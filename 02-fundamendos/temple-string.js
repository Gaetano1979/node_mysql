let nombre = 'Deadpool';
let real = 'Wilson';

// console.log(nombre + ' ' + real);
// console.log(`${1+2}`);//con este ``signos puedo ejecutar comandos javascrit
// console.log(`${nombre} ${real}`);

// let nombrecompleto = nombre + ' ' + real;
// let nombreTemple = `${nombre} ${real}`;

// console.log(nombrecompleto === nombreTemple);

function getNombre() {
    return `${nombre} ${real}`
}
console.log(getNombre());
console.log(`El nombre de: ${getNombre()}`);