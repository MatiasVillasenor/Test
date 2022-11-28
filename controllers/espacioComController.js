const EspacioCom = require('../models/espacioCom');

const createEspacioCom = (req,res)=>{
    const {name,description,aforo,tiempoReserva} =req.body
    const newEspacioCom = new EspacioCom({
        name,
        description,
        aforo,
        tiempoReserva
    })
    newEspacioCom.save((error,espacioCom)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido crear el espacio común"});
        }
        return res.status(201).send(espacioCom);
    })
}

const getEspacioCom=(req,res)=>{
    EspacioCom.find({},(error, EspacioCom)=>{
        console.log("espacioCom",EspacioCom)
        console.log("error", error)
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        return res.status(200).send(EspacioCom)
    })
}

module.exports ={
    createEspacioCom,
    getEspacioCom
}