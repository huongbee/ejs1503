const express = require('express')
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    let array = [1,2,3,4,6,9,'<b>6</b>']
    let user = {
        name: 'Nguyen Van A',
        age: 12
    }
    res.render('home', { array, user })


    array.forEach((item,key)=>{

    })
});

app.listen(3000)
