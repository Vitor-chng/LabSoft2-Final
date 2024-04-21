const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Automação S2');
})

const energy_model = require('./energyRepository')



app.get('/consumo', (req, res) => {
    energy_model.getConsumo()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})