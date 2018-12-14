//======================
// Verificar Token
//======================

const jwt = require('jsonwebtoken');


let verifiacr = (req, res, next) => {
    let tokenUsuario = req.get('token');

    // imprimo en consola el token
    console.log(tokenUsuario);
    //verificacion de jwt
    jwt.verify(tokenUsuario, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                estatus: false,
                error: err
            });
        }
        req.usuario = decoded.usuario;
        next();
    });


    // para ejecutar la logica de la funcion hay que declarar el next()
    // res.json({
    //     token: tokenUsuario
    // });
};

//======================
// Verificar Token
//======================

let verificarRole = (req, res, next) => {
    let usuarioRole = req.usuario;
    if (usuarioRole.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            estatus: false,
            err: {
                message: 'Usuario sin permiso'

            }
        });
    }
}

module.exports = {
    verifiacr,
    verificarRole
};