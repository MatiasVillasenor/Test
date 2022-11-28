const express = require('express');
const reservaEspacioController = require('../controllers/reservaEspacio');
const api = express.Router();

api.post('/reservaEspacio',reservaEspacioController.createreservaEspacio);
api.get('/reservaEspacio',reservaEspacioController.getreservaEspacio);
api.put('/reservaEspacio/update/:id', reservaEspacioController.updateReserva);
api.delete('/reservaEspacio/delete/:id',reservaEspacioController.deleteReserva);
api.get('/reservaEspacio/search/:id',reservaEspacioController.getUnicaReserva);


module.exports = api;