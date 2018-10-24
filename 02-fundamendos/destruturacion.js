let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder:${this.poder}`
    },
    //tambien puedo escribir
    getNombre1() {
        return `${this.nombre} ${this.apellido} - poder:${this.poder}`

    }
}


console.log(`el primer log es: ${deadpool.getNombre()}`);

let nombre1 = deadpool.nombre;
let apellido1 = deadpool.apellido;
let poder1 = deadpool.poder;

//tambien puedo escribir
//let { nombre, apellido, poder } = deadpool;
//para cambiar el identificador puedo escribir la variable con el ":" ejemplo nombre:primernombre
let { nombre: primerNombre, apellido, poder } = deadpool;
//console.log("el segundo log es: " + nombre, apellido, poder);
console.log("el terzer log es: " + primerNombre, apellido, poder);