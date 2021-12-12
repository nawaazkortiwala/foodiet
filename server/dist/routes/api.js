"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_1 = require("../controller/db/item");
const recipe_1 = require("../controller/db/recipe");
const apiRouter = (0, express_1.Router)();
apiRouter.use('/recipe', recipe_1.default);
apiRouter.use('/item', item_1.default);
exports.default = apiRouter;
//# sourceMappingURL=api.js.map