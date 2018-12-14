//importamos express
const express = require('express');
//creamos la incriptacion
const bcrypt = require('bcrypt');
//importamos el jsonwebtoken
const jwt = require('jsonwebtoken');
//importamos el usuario
const Usuario = require('../models/usuario.js');
//declaramos el app de express
const app = express();


app.post('/login', (req, res) => {

    let peticion = req.body;
    Usuario.findOne({ email: peticion.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                estatus: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                estatus: false,
                err: {
                    message: 'Usuario o contraseña incorecta'
                }
            });
        }
        if (!bcrypt.compareSync(peticion.pasword, usuarioDB.pasword)) {
            return res.status(400).json({
                estatus: false,
                err: {
                    message: 'Contraseña no corecta'
                }
            });
        }

        let tokenUsuario = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CAUDUCIDAD_TOKE });

        res.json({
            estatus: true,
            usuario: usuarioDB,
            token: tokenUsuario
        });
    });

});








module.exports = app;