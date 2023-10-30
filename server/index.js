import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors'
import goodRoute from './routes/goodRoute.js'

const app = express()

app.use(express.json())

app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:2000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))

app.get('/', (req,res) => {
    console.log(req)
    return res.status(234).send('Halooo')
});

app.use('/goods', goodRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`APP is listening to port: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })