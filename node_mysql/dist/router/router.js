"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/clientes', (req, res) => {
    const query = `
    select * from clientes`;
    mysql_1.default.ejacuarquery(query, (errore, clientes) => {
        if (errore) {
            res.status(400).json({
                ok: false,
                error: errore
            });
        }
        else {
            res.json({
                ok: true,
                datos: clientes
            });
        }
    });
});
router.get('/clientes/:id', (req, res) => {
    const id_params = req.params.id;
    console.log("id_params:", id_params);
    const escapeid = mysql_1.default.instance.conexcion.escape(id_params);
    console.log("escapeid:", escapeid);
    const query = `
    select * from clientes where idclientes=${escapeid}`;
    console.log(`query: ${query}`);
    mysql_1.default.ejacuarquery(query, (errore, cliente) => {
        if (errore) {
            res.status(400).json({
                ok: false,
                error: errore
            });
        }
        else {
            res.json({
                ok: true,
                datos: cliente
            });
        }
    });
    // res.json({
    //     ok:true,
    //     mensaje:'Todo Bien en Id',
    //     id:id_params
    // })
});
router.post('/clientes', (req, res) => {
    const nombrePostMan = req.body.nombre;
    const poderPostman = req.body.poder;
    console.log(`datos inviados son: ${nombrePostMan} y ${poderPostman}`);
    // console.log(`req.body:${}`);
    console.log('Todo bien en Post');
    const post = { nombre: nombrePostMan, poder: poderPostman };
    const query = `INSERT INTO clientes (nombre,poder) value ('${post.nombre}','${post.poder}')`;
    console.log(query);
    mysql_1.default.ejacuarquery(query, (errore, cliente) => {
        if (errore) {
            res.status(400).json({
                ok: false,
                error: errore
            });
        }
        else {
            res.json({
                ok: true,
                datos: cliente,
                nombre: nombrePostMan,
                poder: poderPostman
            });
        }
    });
    // res.json({
    //     ok:true,
    //     mensaje:'Todo bien en post',
    //     nombre:nombrePostMan,
    //     poder:poderPostman
    // });
});
exports.default = router;
