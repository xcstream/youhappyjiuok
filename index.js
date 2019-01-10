var express = require('express')
app = express()

const session = require('express-session')
const bodyParser = require("body-parser");
const serveStatic = require('serve-static')
const static = serveStatic('public' )

sessionSetting = {
    secret: '11',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 3600 * 24 * 30
    },
}

app.use(session(sessionSetting))
app.use(static)
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(10000)