import express = require('express');
import path= require('path');


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

    private publicFolder(){
        const publicPath=path.resolve(__dirname,'../public');
        this.app.use(express.static(publicPath));
    }
    start(callback:Function){
        this.app.listen(this.port,callback)
        this.publicFolder();
    }

}