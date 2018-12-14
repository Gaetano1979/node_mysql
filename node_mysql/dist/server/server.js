"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor(parametro_port) {
        this.port = parametro_port;
        this.app = express();
    }
    static init(porto) {
        return new Server(porto);
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
