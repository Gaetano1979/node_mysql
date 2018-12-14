import{Router,Request,Response}from 'express';

const router=Router();


router.get('/clientes',(req:Request,res:Response)=>{
    res.json({
        ok:true,
        mensaje:'Todo Bien'
    });
});
router.get('/clientes/:id',(req:Request,res:Response)=>{
    const id_params=req.params.id;
    res.json({
        ok:true,
        mensaje:'Todo Bien en Id',
        id:id_params
    })
})

export default router;