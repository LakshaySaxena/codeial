const express= require('express');
const app= express();
const port=8000;


app.use('/',require('./routes'));

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){console.port(err);}

    console.log(`running on ${port}`)
})