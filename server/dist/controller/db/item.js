"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../db");
const itemRouter = (0, express_1.Router)();
itemRouter.get('/', (req, res) => {
    db_1.default.query('SELECT * FROM item', (error, result) => {
        if (error) {
            res.status(406).json({
                error: true,
                messagae: error.message,
            });
        }
        else {
            res.json({
                success: true,
                message: result.rows,
            });
        }
    });
});
itemRouter.post('/', (req, res) => {
    const { name, type, price } = req.body;
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
    )`;
    db_1.default.query(query, (error, result) => {
        if (error) {
            res.status(406).json({
                error: true,
                messagae: error.message,
            });
        }
        else {
            res.json({
                success: true,
                message: result.rowCount,
            });
        }
    });
});
itemRouter.put('/', (req, res) => {
    const { id, name, type, price } = req.body;
    const query = `UPDATE item SET 
        ${name ? `name='${name}'` : ''}
        ${type ? `${name || type ? ',' : ''} type='${type}'` : ''}
        ${price ? `${type || price ? ',' : ''} price='${price}'` : ''}
        WHERE id=${id}
    `;
    db_1.default.query(query, (error, result) => {
        if (error) {
            res.status(406).json({
                error: true,
                messagae: error.message,
            });
        }
        else {
            res.json({
                success: true,
                message: result.rowCount,
            });
        }
    });
});
itemRouter.delete('/', (req, res) => {
    const { id } = req.body;
    const query = `DELETE FROM item WHERE id=${id}`;
    db_1.default.query(query, (error, result) => {
        if (error) {
            res.status(406).json({
                error: true,
                messagae: error.message,
            });
        }
        else {
            res.json({
                success: true,
                message: result.rowCount,
            });
        }
    });
});
exports.default = itemRouter;
//# sourceMappingURL=item.js.map