const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const espacioComRoutes = require('./routes/espacioComRoutes.js');
const reservaEspacio = require('./routes/reservaEspacio.js');

app.use(cors());
app.use(express.json());
app.options('*',cors());
app.use('/api',reservaEspacio);
app.use('/api',espacioComRoutes);

const options={
    useNewUrlParser: true,
    autoIndex:true,
    keepAlive:true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family:4,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB, options, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Connected to Database');
    }
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})
