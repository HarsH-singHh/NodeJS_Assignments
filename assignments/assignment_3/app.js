const express = require("express");
const faker = require("faker");
var bodyParser = require('body-parser');
const app = express();

app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

var users = [];
users.push({
    name:faker.name.findName(),
    email: faker.internet.email()
})
users.push({
    name:faker.name.findName(),
    email: faker.internet.email()
})
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
    //console.log(users);
    res.render('homepage', {users}) 
});

app.get('/form',(req, res)=>{
    res.render('form') 
});

app.post("/user/add", (req, res)=>{
    console.log(req.body);
    users.push({
        name: req.body.name,
        email: req.body.email,
        image: faker.image.image()
    })
    res.redirect('/');
})

app.listen(3000, ()=>console.log("Server is listening"));