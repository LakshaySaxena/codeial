const express= require('express');
const app= express();
const port=8000;

const expressLayout= require('express-ejs-layouts');

app.use(express.static('./assets'));


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