let empleados = [{
    id: 1,
    nombre: 'Gaetano'
}, {
    id: 2,
    nombre: 'Filomena'
}, {
    id: 3,
    nombre: 'Silverio'
}, {
    id: 4,
    nombre: 'Giovanna'
}];
let salarios = [{
    id: 1,
    salario: 1000,
}, {
    id: 2,
    salario: 1500,
}]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoBD = empleados.find(item => item.id === id);
        if (!empleadoBD) {
            reject(`El id ${id} no le apartenece a ningun empleado`);
        } else {
            resolve(empleadoBD);
        }
    })
}
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioBD = salarios.find(item => item.id === empleado.id);
        if (!salarioBD) {
            reject(`El empleado ${empleado.nombre} no tiene un salario asiñado`);

        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado.id
            });
        }
    })
}

// getEmpleado(5).then(empleado => {
//     // console.log('Empleado de Bd', empleado);
//     // getSalario(empleado).then(resp => {
//     //     console.log(`El salario de ${resp.nombre}, es de ${resp.salario}`);

//     // }, (err) => {
//     //     console.log(err);

//     // });

// }, (err) => {
//     console.log(err);

// });

//otra forma de escribir la funcion getEmpleado es:

getEmpleado(5).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre}, es de ${resp.salario}`);

}).catch(err => {
    console.log(err);

})