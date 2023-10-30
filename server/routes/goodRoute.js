import express from 'express'
import { Good } from '../models/barang.js'

const router = express.Router()


//create goods
router.post('/', async (req,res) => {
    try {
        if (
            !req.body.title ||
            !req.body.quantity ||
            !req.body.price 
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, quantity, price',
            })
        }
        const newGood = {
            title: req.body.title,
            quantity: req.body.quantity,
            price: req.body.price,
        }

        const good = await Good.create(newGood)

        return res.status(201).send(good)
    } catch (err) {
        console.log(err.message)
        response.status(500).send({message: err.message})
    }
})
//get all goods
router.get('/', async (req,res) => {
    try {
        const goods = await Good.find({})

        return res.status(200).json({
            count: goods.length,
            data: goods
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

//get goods
router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const good = await Good.findById(id)

        return res.status(200).json(good)
    } catch (err) {
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

//update
router.put('/:id', async (req,res) => {
    try {
        if (
            !req.body.title ||
            !req.body.quantity ||
            !req.body.price 
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, quantity, price',
            })
        }
        const {id} = req.params

        const result = await Good.findByIdAndUpdate(id, req.body)

        if (!result) {
            return res.status(404).json({message: 'Good not found'})
        }
        return res.status(200).send({message: 'Good updated successfully'})
    } catch (err) {
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
});

// delete
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Good.findByIdAndDelete(id)

        if(!result) {
            return res.status(404).json({message: 'Good not found'})
        }
        return res.status(200).send({message: 'Good deleted successfully'})

    } catch (err) {
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

export default router