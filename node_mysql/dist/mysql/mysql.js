"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log('Clase Inicializada');
        this.conexcion = mysql.createConnection({
            host: 'ls-4ced6077d7519bffb5de949e2bae2dcbe3615210.c5s20s1vsvjo.eu-central-1.rds.amazonaws.com',
            port: 3306,
            user: 'dbmasteruser',
            password: 'gaetano1979',
            database: 'dbmaster'
        });
        this.conectarBD();
    }
    conectarBD() {
        this.conexcion.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos AWS on line');
        });
    }
}
exports.default = MySQL;
