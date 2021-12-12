import { Router } from 'express'
import pool from '../../db'

const itemRouter = Router()

itemRouter.get('/', (req, res) => {
    pool.query('SELECT * FROM item', (error, result) => {
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

itemRouter.post('/', (req, res) => {
    const { name, type, price } = req.body
    const query = `INSERT INTO item (
        id,
        name,
        type,
        price
    ) VALUES (
    ${Math.random().toString().split('.')[1].slice(0, 9)},
    '${name}',
    '${type}',
    '${price}'
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

itemRouter.put('/', (req, res) => {
    const { id, name, type, price } = req.body

    const query = `UPDATE item SET 
        ${name ? `name='${name}'` : ''}
        ${type ? `${name || type ? ',' : ''} type='${type}'` : ''}
        ${price ? `${type || price ? ',' : ''} price='${price}'` : ''}
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

itemRouter.delete('/', (req, res) => {
    const { id } = req.body

    const query = `DELETE FROM item WHERE id=${id}`

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

export default itemRouter
