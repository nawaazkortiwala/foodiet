import { Router } from 'express'
import itemRouter from '../controller/db/item'
import recipeRouter from '../controller/db/recipe'

const apiRouter = Router()

apiRouter.use('/recipe', recipeRouter)
apiRouter.use('/item', itemRouter)

export default apiRouter
