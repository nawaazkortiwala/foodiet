"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../db");
const recipeRouter = (0, express_1.Router)();
recipeRouter.post('/list', (req, res) => {
    db_1.default.query('SELECT * FROM recipe', (error, result) => {
        if (error) {
            throw error;
        }
        res.json(result.rows);
    });
    res.end('');
});
exports.default = recipeRouter;
//# sourceMappingURL=recipe.js.map