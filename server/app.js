if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.get('/', (req, res) => {
  res.send({ message: 'Halooooooooooooo' })
})

app.listen(port, () => {
  console.log(`App berada di http://localhost:${port}`);
})
