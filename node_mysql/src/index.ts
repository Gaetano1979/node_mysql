import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';
import bodyParser, { json } from 'body-parser';
import cors from 'cors';


const server=Server.init(3000);
// BodyParser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
// impostaciones del cors
server.app.use(cors({origin:true,credentials:true}))

// rutas de servicios
server.app.use(router);

// const mysql=new MySQL();
MySQL.instance;

server.start(()=>{
    console.log('Servidor corriendo el puerto 3000');
    
});
