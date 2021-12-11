"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'pos-dev',
    database: 'foodiet',
    password: '1q2w3e4r5t6y',
    host: '139.59.84.5',
    port: 5432,
});
exports.default = pool;
//# sourceMappingURL=db.js.map