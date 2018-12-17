import{Router,Request,Response}from 'express';
import MySQL from '../mysql/mysql';

const router=Router();


router.get('/clientes',(req:Request,res:Response)=>{
    const query=`
    select * from clientes`;

    MySQL.ejacuarquery(query,(errore:any, clientes:Object[])=>{
        if (errore) {
            res.status(400).json({
                ok:false,
                error:errore
            });
        }else{
            res.json({
                ok:true,
                datos:clientes
            })
            
        }
    });
   });
   
router.get('/clientes/:id',(req:Request,res:Response)=>{
    const id_params=req.params.id;
    console.log("id_params:",id_params);
    
    const escapeid=MySQL.instance.conexcion.escape(id_params);
    console.log("escapeid:",escapeid);
    
    const query=`
    select * from clientes where idclientes=${escapeid}`;
    console.log(`query: ${query}`);
    
    MySQL.ejacuarquery(query,(errore:any, cliente:Object[])=>{
        if (errore) {
            res.status(400).json({
                ok:false,
                error:errore
            });
        }else{
            res.json({
                ok:true,
                datos:cliente
            })
        }
    });
    // res.json({
    //     ok:true,
    //     mensaje:'Todo Bien en Id',
    //     id:id_params
    // })
});
router.post('/clientes',(req:Request,res:Response)=>{
    
    const nombrePostMan=req.body.nombre;
    const poderPostman=req.body.poder;
    console.log(`datos inviados son: ${nombrePostMan} y ${poderPostman}`);
    // console.log(`req.body:${}`);
    
    console.log('Todo bien en Post');
    
    
    const post={nombre:nombrePostMan,poder:poderPostman};
    const query=`INSERT INTO clientes (nombre,poder) value ('${post.nombre}','${post.poder}')`;

    console.log(query);
    MySQL.ejacuarquery(query,(errore:any, cliente:Object[])=>{
        if (errore) {
            res.status(400).json({
                ok:false,
                error:errore
            });
        }else{
            res.json({
                ok:true,
                datos:cliente,
                nombre:nombrePostMan,
                poder:poderPostman
                    
                
            })
        }
    });
    

    // res.json({
    //     ok:true,
    //     mensaje:'Todo bien en post',
    //     nombre:nombrePostMan,
    //     poder:poderPostman
    // });
    
        
    });

export default router;