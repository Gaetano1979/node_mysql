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

let getEpleados = (id, callback) => {
    // let empleadoBD=empleados.find(empleado=>{
    //     return empleado.id===id;
    // })
    // tambien lo podemos escribir de otra forma
    let empleadoBD = empleados.find(empleado => empleado.id === id);
    if (!empleadoBD) {
        callback(`El Empleado buscado no existe con el ID ${ id }`);
    } else {
        callback(null, empleadoBD);
    }
}
let getSalario = (empleado, callback) => {
    // let empleadoBD = empleados.find(empleado => empleado.id === id);
    // if (!empleadoBD) {
    //     callback(`El empleado no existe con el id:${id}`);
    // } else {
    //     let salarioBD = salarios.find(stipendios => stipendios.id === empleado.id);
    //     callback(null, empleadoBD, salarioBD)
    // }
    let salarioBD = salarios.find(stipendios => stipendios.id === empleado.id);
    if (!salarioBD) {
        callback(`El empleado ${empleado.nombre} no tiene salario registardo`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        });
    }

}

getEpleados(1, (err, empleado) => {
    if (err) {
        return console.log(err);

    }
    // console.log(empleado);
    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);

        };
        console.log(`El salario de ${resp.nombre}, es de ${resp.salario}`);

    })

});