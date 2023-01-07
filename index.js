const express = require('express')
const app = express()
const PORT = process.env.PORT || 7001
require('dotenv').config()

app.use(express.json())

app.post(`/`, (req, res) => {
  const { num1, num2 } = req.body
  
  res.json({
    stutus: true,
    num1: num1,
    num2: num2,
    sumary: num1 + num2
  });
})

app.listen(PORT, () => {
  console.log(`Start on port ${PORT}`)
})