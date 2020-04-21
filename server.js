'use strict';  

require('dotenv');
const express = require('express');
const app = express();
const PORT = process.env.PORT | 3000;

//set up our ejs engine
app.set('view engine', 'ejs');  

//serve our static files - css files
app.use(express.static('./public'));

//set up test route for proof of life
app.get('/', (request, response) => {
    response.render('./pages/index');
});

//test route
app.get('/hello', (request, response) => {
    response.render('./pages/index');
});

//Turn app on to listening
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));