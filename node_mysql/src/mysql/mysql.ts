import mysql=require('mysql');

export default class MySQL{
    private static _instance:MySQL;


    conexcion:mysql.Connection;
    conectado:boolean=false;


    constructor(){
        console.log('Clase Inicializada');
        
        

        this.conexcion=mysql.createConnection({
            host:'ls-4ced6077d7519bffb5de949e2bae2dcbe3615210.c5s20s1vsvjo.eu-central-1.rds.amazonaws.com',
            port:3306,
            user:'dbmasteruser',
            password:'gaetano1979',
            database:'dbmaster'
        });
        this.conectarBD();  
        
            
        }

        // creamos un metodos singleton
        public static get instance(){
            return this._instance || (this._instance=new this());
        }

        // creamos metodos para las query
        static ejacuarquery(query:string,callback:Function){
            this.instance.conexcion.query(query,(errori,resultati:Object[],fields)=>{
                if (errori) {
                    console.log('Error en la query');
                    console.log(errori);
                    return callback(errori);
                }
                if (resultati.length===0) {
                    callback('Registro no existe');
                }else{
                    callback(null,resultati)  
                }
            })
        };
        

        private conectarBD(){
            this.conexcion.connect((err:mysql.MysqlError)=>{
                if(err){
                    console.log(err.message);
                    return;                    
                }
                this.conectado=true;
                console.log('Base de datos AWS on line');
                
            });
       

        
    }
}