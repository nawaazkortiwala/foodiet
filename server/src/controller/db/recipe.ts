import { Router } from 'express'
import pool from '../../db'

const recipeRouter = Router()

recipeRouter.get('/', (req, res) => {
    pool.query('SELECT * FROM recipe', (error, result) => {
        if (error) {
            res.status(406).json({
                error: true,
                messagae: error.message,
            })
        } else {
            res.json({
                success: true,
                message: result.rows,
            })
        }
    })
})

recipeRouter.post('/', (req, res) => {
    const { name, type, description } = req.body
    const query = `INSERT INTO recipe (
        id,
        name,
        type,
        description
    ) VALUES (
    ${Math.random().toString().split('.')[1].slice(0, 9)},
    '${name}',
    '${type}',
    '${description}'
    )`

    pool.query(query, (error, result) => {
        if (error) {
            res.status(406).json({
                error: true,
                messagae: error.message,
            })
        } else {
            res.json({
                success: true,
                message: result.rowCount,
            })
        }
    })
})

recipeRouter.put('/', (req, res) => {
    const { id, name, type, description } = req.body

    const query = `UPDATE recipe SET 
        ${name ? `name='${name}'` : ''}
        ${type ? `${name || type ? ',' : ''} type='${type}'` : ''}
        ${description ? `${type || description ? ',' : ''} description='${description}'` : ''}
        WHERE id=${id}
    `

    pool.query(query, (error, result) => {
        if (error) {
            res.status(406).json({
                error: true,
                messagae: error.message,
            })
        } else {
            res.json({
                success: true,
                message: result.rowCount,
            })
        }
    })
})

recipeRouter.delete('/', (req, res) => {
    const { id } = req.body

    const query = `DELETE FROM recipe WHERE id=${id}`

    pool.query(query, (error, result) => {
        if (error) {
            res.status(406).json({
                error: true,
                messagae: error.message,
            })
        } else {
            res.json({
                success: true,
                message: result.rowCount,
            })
        }
    })
})

export default recipeRouter
