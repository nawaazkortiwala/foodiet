import { Router } from 'express'
import recipeRouter from '../controller/db/recipe'

const apiRouter = Router()

apiRouter.post('/recipe', (...args) => {
    console.log('in recipe')
    args[1].end('ooo')
})

export default apiRouter
