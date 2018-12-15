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
    // creamos un metodos singleton
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // creamos metodos para las query
    static ejacuarquery(query, callback) {
        this.instance.conexcion.query(query, (errori, resultati, fields) => {
            if (errori) {
                console.log('Error en la query');
                console.log(errori);
                return callback(errori);
            }
            if (resultati.length === 0) {
                callback('Registro no existe');
            }
            else {
                callback(null, resultati);
            }
        });
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
