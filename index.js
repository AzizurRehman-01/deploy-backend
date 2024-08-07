require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook',(req,res)=>{
    res.send('This is my Facebook Id')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at my webiste</h1>')
})
app.get('/Youtube',(req,res)=>{
    res.send('<h2>This is my Youtube channel</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})