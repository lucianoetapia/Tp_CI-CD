const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Trabajo de Hersco y Tapia<br>' + "/**  HASH_DATE **/" + "_" + "/**  HASH_ID **/")
})

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`)
})

module.exports = app
