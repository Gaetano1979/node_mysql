function sumar(a, b) {
    return a + b;
}
console.log("function " + sumar(10, 20));

let sumarFlecha = (a, b) => {
    return a + b;
}
console.log(`Function flecha ${sumarFlecha(10, 20)}`);

//tamebien podemos escribir 
let sumarFlecha2 = (a, b) => a + b;
console.log(`Funtion flecha2 es: ${sumarFlecha2(10, 20)}`);

console.log(`*************************`);

//convertir esta funcion en flecha
function saludar() {
    return 'Hola a todos'
}
console.log(saludar());
console.log('******************');
let saludarFlecha = () => 'Hola a todos';
console.log(saludarFlecha());

console.log('******************');

function saludar2(nombre) {
    return `Hola ${nombre}`
}
console.log(saludar2('Gaetano'));
//trasformacion a Flecha
let saludarFlecha3 = nombre => `Hola ${nombre}`;
//podemos escribirlo tambien así
let saludarFlecha4 = (nombre) => `Hola ${nombre}`;

console.log(saludarFlecha4('Gaetano'));

//***********************************************/

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder:${this.poder}`
    },
    //tambien puedo escribir
    getNombreFlecha() {
        return `${this.nombre} ${this.apellido} - poder:${this.poder}`
    }
}
console.log(deadpool.getNombreFlecha());