import * as express from 'express'
import apiRouter from './routes/api'

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(
    express.urlencoded({
        extended: false,
    })
)

app.all('*', (req, __, next) => {
    console.log(req.url)
    next()
})

app.use('/api', apiRouter)

app.listen(5000, () => {
    console.log('Server active: http://localhost:5000')
})
