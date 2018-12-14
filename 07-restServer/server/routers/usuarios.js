//importamos express
const express = require('express');
//creamos la incriptacion
const bcrypt = require('bcrypt');

//usamos la libreria underscore
const _ = require('underscore');
//importamos el usuario
const Usuario = require('../models/usuario.js');
// importo el middlewares creado por el token
const { verifiacr, verificarRole } = require('../middewares/autenticacion');
//declaramos el app de express
const app = express();

//declaramos el parser 
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.get('/usuarios', verifiacr, (req, res) => {

    // return res.json({
    //     usuarioToken: req.usuario,
    //     id: req.usuario._id,
    //     name: req.usuario.nombre
    // });
    // let cuerpopeticion=req.body;
    // res.json('Listas Usuarios');
    let desde = req.query.desde || 0;
    let limite = req.query.limite || 5;
    desde = Number(desde);
    limite = Number(limite);

    Usuario.find({ estado: true }, 'nombre email')
        .skip(desde)
        .limit(limite) //esta funcion devuleve un limite maximo
        .exec((err, usuariofind) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            Usuario.count({ estado: true }, (err, conteo) => {

                res.json({
                    ok: true,
                    usuarios: usuariofind,
                    TotUsuarios: conteo
                });
            });
        });
});

app.post('/usuarios', [verifiacr, verificarRole], (req, res) => {
    let peticion = req.body;

    let usuario = new Usuario({
        nombre: peticion.nombre,
        email: peticion.email,
        pasword: bcrypt.hashSync(peticion.pasword, 10),
        role: peticion.role
    });

    usuario.save((err, usuarioBD) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioBD
        });
    })


    // if (peticion.nombre === undefined) {
    //     res.status(400).json({
    //         ok: false,
    //         mensaje: 'El nombre es necesario',
    //     });
    // } else {
    //     //cambio respuesta
    //     // res.json('Pagina Post usuarios');
    //     res.json({
    //         body: peticion
    //     });
    // }
});

app.put('/usuarios', [verifiacr, verificarRole], (req, res) => {
    res.json('Pagina Put Usuarios');
});

app.put('/usuarios/:id', [verifiacr, verificarRole], (req, res) => {
    let idUsuario = req.params.id;
    // modificamos esto variable con la funcion pick de UNDESCORE
    // let peticion = req.body;
    let peticion = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);
    Usuario.findByIdAndUpdate(idUsuario, peticion, { new: true, runValidators: true }, (err, usuarioBD) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }


        res.json({
            ok: true,
            usuario: usuarioBD

        });
    });
});

app.delete('/usuarios/:id', [verifiacr, verificarRole], (req, res) => {
    //res.json('Pagina Delete Usuarios');
    let idUsuario = req.params.id;
    let cambiaEstado = {
        estado: false
    };
    // Usuario.findByIdAndDelete(idUsuario, (err, usuarioBorrado) => {
    //     if (err) {
    //         return res.status(400).json({
    //             ok: false,
    //             err
    //         });
    //     }
    //     if (usuarioBorrado === null) {
    //         return res.status(400).json({
    //             estatus: false,
    //             error: {
    //                 message: 'Usuario no existe en la Base de datos'
    //             }
    //         });
    //     }
    //     res.json({
    //         ok: true,
    //         usuario: usuarioBorrado
    //     });

    // })
    Usuario.findByIdAndUpdate(idUsuario, cambiaEstado, { new: true }, (err, usuarioMod) => {
        if (err) {
            return res, status(400).json({
                estatus: false,
                error: err
            });
        }
        if (usuarioMod.estado === false) {
            return res.status(400).json({
                estatus: false,
                error: {
                    usuario: usuarioMod,
                    message: 'El Usuario no se encuntra activo'
                }
            });
        } else {

            res.json({
                estatus: true,
                usuario: usuarioMod
            });
        }
    });
});

module.exports = app;