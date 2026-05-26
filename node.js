const express = require('express')
const app = express()

app.listen(100, ()=>{
    console.log('successfully Connected on port 1000.')
})

app.get('/', (req,res)=>{
    res.send("<h1><B> niraliiiii!</B></h1>")
})

app.get('/user/:userid-:passid', (req,res)=>{
   res.send(req.params)
    
})

app.get('/search', (req,res)=>{
   const name=req.query.name
    const age = req.query.age
    res.send(`search result for Name: ${name} Age=${age}`)
})
