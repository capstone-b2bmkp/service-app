require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3000
const db = require('./models')

const app = express()

app.use(cors({
  origin: '*'
}))

const routes = require('./routes/index')

db.sequelize.authenticate().then(() => {
  console.log('conected to database')
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}).catch(err => {
  console.log('No se pudo conectar a la base de datos:', err)
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(routes)
