const express= require('express');
const cookiparser= require('cookie-parser');
const app= express();
const port=8000;
const db= require('./config/mongoose');

const expressLayout= require('express-ejs-layouts');

app.use(express.static('./assets'));

const { urlencoded } = require('express');


app.use(express.urlencoded());
app.use(cookiparser());

app.use(expressLayout);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/',require('./routes'));

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){console.port(err);}

    console.log(`running on ${port}`)
})