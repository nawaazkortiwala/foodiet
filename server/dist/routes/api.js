"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiRouter = (0, express_1.Router)();
apiRouter.post('/recipe', (...args) => {
    console.log('in recipe');
    args[1].end('ooo');
});
exports.default = apiRouter;
//# sourceMappingURL=api.js.map