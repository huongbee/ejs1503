const express = require('express')
const {arraySinger, prefixImg, prefixLink, Singer} = require('./models/Singer')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index',{arraySinger, prefixImg, prefixLink})
})

app.get('/add-singer',(req,res)=>{
    res.render('add')
})
app.post('/add-singer',(req,res)=>{
    const { name, avatar, link } = req.body
    const singer = new Singer(
        Math.round(Math.random()*1000),
        name,
        avatar,
        link
    )
    arraySinger.push(singer)
    return res.redirect('/')
})

app.listen(3000)