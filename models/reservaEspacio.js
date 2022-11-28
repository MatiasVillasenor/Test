const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const reservaEspacioSchema = new Schema({
    espacioReservado: {
        type: 
          Schema.ObjectId
        ,
        ref: "espacioCom",
        required: true
      },
      FechaInicio: {
        type: Date
      },
      FechaTermino: {
        type: Date
      },
      observacion: {
        type: String,
        required: false,
        minLenght: 1,
        maxLength: 2000
      },
      estadoEspacio: {
        type: String,
        enum: [
          "bueno",
          "sucio",
          "malo",
          "requiere mantención"
        ]
      },
      estadoReserva: {
        type: String,
        enum: [
          "Disponible",
          "Reservado",
          "En mantención"
        ]
      }
})

module.exports = mongoose.model('reservaEspacio',reservaEspacioSchema);