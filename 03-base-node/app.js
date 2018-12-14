const fs = require('fs');

let base = 2;
let data = '';
for (let index = 1; index < 10; index++) {
    //console.log(base * index);
    //console.log(`numero ${index} (${base} * ${index}) = ${base*index}`);
    data += `numero ${index} (${base} * ${index}) = ${base*index}\n`;
}


fs.writeFile(`tablas/tabla ${base}.txt`, data, (err => {
    if (err) throw err;

    console.log(`El archivo tabla ${base} se ha guardado corectamente`);

}));