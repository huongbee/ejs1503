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
    const id = Math.round(Math.random()*1000)
    const singer = new Singer(id,name,avatar,link)
    arraySinger.push(singer)
    return res.redirect('/')
})
app.get('/update/:id',(req,res)=>{
    const {id} = req.params
    //check id exixts in arrSinger
    const singer = arraySinger.find(singer=>singer.id == id)
    if(!singer) return res.send({error: 'Singer not found!'})
    res.render('update',{singer})
})
app.listen(3000)