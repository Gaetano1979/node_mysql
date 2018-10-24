//base de datos
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
    //funzione che retorna un empleado

let getEmpleado = async(id) => {

    let EmpleadoBD = empleados.find(item => item.id === id);
    if (!EmpleadoBD) {
        throw new Error(`No esiste un empleado con este ${id}`)
    } else {
        return EmpleadoBD;
    }
}
let getSalario = async(empleado) => {

    let SalarioBD = salarios.find(item => item.id === empleado.id);
    if (!SalarioBD) {
        throw new Error(`No se ha encontrado un salario por el ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: SalarioBD.salario,
            id: empleado.id
        };
    }

}
let info = async(id) => {
    let empleado = await getEmpleado(id);
    let res = await getSalario(empleado);
    // console.log(empleado);
    // console.log(respuesta);
    return `El usuario ${res.nombre} tiene un salario de ${res.salario}$`;


}
info(3)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log(e);

    })