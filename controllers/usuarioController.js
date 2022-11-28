const usuario = require('../models/usuario');

const createUsuario = (req,res)=>{
    const {name,foto,nroTelefono,role} =req.body
    const newUsuario = new EspacioCom({
        name,
        foto,
        nroTelefono,
        role
    })
    newEspacioCom.save((error,espacioCom)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido crear usuario"});
        }
        return res.status(201).send(espacioCom);
    })
}

module.exports ={
    createEspacioCom
}