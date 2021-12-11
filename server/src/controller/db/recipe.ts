import { Router } from 'express'
import pool from '../../db'

const recipeRouter = Router()

recipeRouter.post('/list', (req, res) => {
    pool.query('SELECT * FROM recipe', (error, result) => {
        if (error) {
            throw error
        }
        res.json(result.rows)
    })
    res.end('')
})

export default recipeRouter
