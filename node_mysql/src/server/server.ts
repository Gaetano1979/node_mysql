import express = require('express');


export default class Server{

    public app:express.Application;
    public port:number;

    constructor(parametro_port:number){
        this.port=parametro_port;
        this.app=express();
    }

    static init (porto:number){
        return new Server(porto);
    }
    start(callback:Function){
        this.app.listen(this.port,callback)
    }

}