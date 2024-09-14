// Variable initialization
const express = require('express');
const mysql = require('mysql');
const session = require('express-session');

// DB Connection
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'gadrone',
    password : '',
    database : 'node_box',
});

const app = express();
const PORT = process.env.PORT || 5000;

// Uses
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'));

app.set('view engine', 'ejs');


// Main Routes:
app.get('/', (request, response) => {
    const locals = {
        title : "Login page"
    }
    response.render('login', {locals});
})

app.get('/signup', (request, response) => {
    const locals = {
        title : "Login page"
    }
    response.render('login', {locals});
})




app.listen(PORT, ()=> {
    console.log(`Server runs on port ${PORT}`)
})