const express = require('express');

const app = express();

app.use(require('./usuarios.js'));
app.use(require('./login.js'));






module.exports = app;