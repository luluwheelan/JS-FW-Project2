const express = require('express');
const app = express();


//Import our Page Routes

const beerRoutes = require('./routes/beers');
const testerRoutes = require('./routes/testers');
const sessionRoutes = require('./routes/sessions');


//Register our Page Routes with our app

app.use('/beers', beerRoutes);
app.use('/testers', testerRoutes);
app.use('/', sessionRoutes);

//Export our changes
module.exports = app;