const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

// () => {}
app.post('/', (req, res) => {
  const { num1, num2 } = req.body
  
  res.json({
    stutus: true,
    num1: num1,
    num2: num2,
    sumary: num1 + num2
  });
})

app.listen(process.env.PORT)