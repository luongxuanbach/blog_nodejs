const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ngmbby', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
    res.send('Hello Mai xinhh! ' + c + ' Tuoi')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})