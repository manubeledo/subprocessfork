const express = require('express')
require('dotenv').config()
const app = express()
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const PORT = Number(argv._) || process.env.PORT
const data = require('./processdata.js')
const serverRoutes = require('./routes/index')


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.set("views", "./views/layouts");

app.get('/', (req, res) => {
    res.send('En la raiz del server')
})

app.get('/info', (req, res) => {
    res.render('index', {data: data})
})

serverRoutes(app)

app.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`))

