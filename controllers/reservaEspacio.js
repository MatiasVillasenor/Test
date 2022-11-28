const reservaEspacio = require('../models/reservaEspacio');

const createreservaEspacio = (req,res)=>{
    const {espacioReservado,FechaInicio,FechaTermino,observacion,estadoEspacio,estadoReserva} =req.body
    const newreservaEspacio = new reservaEspacio({
        espacioReservado,
        FechaInicio,
        FechaTermino,
        observacion,
        estadoEspacio,
        estadoReserva
    })
    newreservaEspacio.save((error,reservaEspacio)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido registrar la reserva"});
        }
        return res.status(201).send(reservaEspacio);
    })
}

const getreservaEspacio=(req,res)=>{
    reservaEspacio.find({},(error, reservaEspacio)=>{
        console.log("reservaEspacios",reservaEspacio)
        console.log("error", error)
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"});
        }
        if(reservaEspacio.lenght==0){
            return res.status(404).send({message: "No se encontraron reservas"});
        }
        return res.status(200).send(reservaEspacio);
    })
}

const updateReserva=(req,res)=>{
    console.log(req.params.io)
    const {id}=req.params
    reservaEspacio.findByIdAndUpdate(id,req.body,(error,reservaEspacio)=>{
        if(error){
            return res.status(400).send({message: "No se pudo actualizar la reserva"});
        }
        if(!reservaEspacio){
            return res.status(404).send({message: "No se encontró la reserva"});
        }
        return res.status(200).send({message: "Reserva actualizada"});
    })
}

const deleteReserva=(req,res)=>{
    const {id}=req.params
    reservaEspacio.findByIdAndDelete(id,(error,reservaEspacio)=>{
        if(error){
            return res.status(400).send({message: "No se ha podido eliminar la reserva"})
        }
        if(!reservaEspacio){
            return res.status(404).send({message:"No se ha podido encontrar la reserva"})
        }
        return res.status(200).send({message:"Reserva eliminada"})
    })
}

const getUnicaReserva=(req, res)=>{
    const {id}=req.params
    reservaEspacio.findById(id,(error,reservaEspacio)=>{
        if(error){
            return res.status(400).send({message: "No se ha podido modificarla reserva"})
        }
        if(!reservaEspacio){
            return res.status(404).send({message:"No se ha podido encontrar la reserva"})
        }
        return res.status(200).send({reservaEspacio})
    })
}

module.exports ={
    createreservaEspacio,
    getreservaEspacio,
    updateReserva,
    deleteReserva,
    getUnicaReserva
}