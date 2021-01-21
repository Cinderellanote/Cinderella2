const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
res.render('top.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/home', (req, res) => {
res.render('home.ejs');
});

app.get('/Beauty', (req, res) => {
    res.render('Beauty.ejs');
});

app.get('/Study', (req, res) => {
    res.render('study.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.get('/achievement', (req, res) => {
    res.render('achievement.ejs');
});

app.listen(3000);