"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
const mysql_1 = __importDefault(require("./mysql/mysql"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = server_1.default.init(3000);
// BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// impostaciones del cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
// rutas de servicios
server.app.use(router_1.default);
// const mysql=new MySQL();
mysql_1.default.instance;
server.start(() => {
    console.log('Servidor corriendo el puerto 3000');
});
