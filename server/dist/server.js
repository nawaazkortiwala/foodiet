"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const api_1 = require("./routes/api");
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));
app.all('*', (req, __, next) => {
    console.log(req.url);
    next();
});
app.post('/api', (...args) => {
    console.log('in api');
    (0, api_1.default)(...args);
});
app.listen(5000, () => {
    console.log('Server active: http://localhost:5000');
});
//# sourceMappingURL=server.js.map