const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// const errorPg = require('./404')
// TODO: import your diagnostics route
const diagnostics = require('./diagnostics');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);
// app.use('/404', errorPg)
// TODO: Initialize diagnostics route
app.use('/diagnostics', diagnostics);
module.exports = app;
