const express = require('express')
const {arraySinger, prefixImg, prefixLink} = require('./models/Singer')
const app = express();

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('index',{arraySinger, prefixImg, prefixLink})
})

app.get('/add-singer',(req,res)=>{
    res.render('add')
})
app.post('/add-singer',(req,res)=>{
    // 
    // res.render('add')
})


app.listen(3000)
