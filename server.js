const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport');

const playerRoute = require('./routes/player');
const authRoute = require('./routes/auth');

mongoose.connect('mongodb+srv://shaniasad:secre7@cluster0.vp4fu.mongodb.net/?retryWrites=true&w=majority')

const app = express()

app.use(passport.initialize())

app.use('/player', passport.authenticate('jwt', {session: false}), playerRoute);

app.use('/auth', authRoute);


app.get("/", (req, res) => {
    res.send("welcome to CRUD service")
})

app.use((req, res) => {
    res.status(404).send("<h1> Endpoint not found.</h1>")
})

app.listen(3000, () => {
    console.log('server listening on http://localhost:3000.')
})