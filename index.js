const express= require('express');
const cookiparser= require('cookie-parser');
const app= express();
const port=8000;
const expressLayout= require('express-ejs-layouts');
const db= require('./config/mongoose');
//used for session cookie
const session= require('express-session');
const passport= require('passport');
const passportLocal= require('./config/passport-local-strategy');
const MongoStore = require("connect-mongo");
const sassMiddleware= require("node-sass-middleware");
const flash= require("connect-flash");
const customMware= require("./config/middleware");

app.use(sassMiddleware({
src: './assets/scss',
dest: './assets/css',
debug: true,
outputStyle:'extended',
prefix: '/css'
}));
app.use(express.urlencoded());
app.use(cookiparser());

app.use(express.static('./assets'));

app.use('/uploads',express.static(__dirname+ '/uploads'));

const { urlencoded } = require('express');



app.use(expressLayout);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//setup view engine
app.set('view engine','ejs');
app.set('views','./views');




app.use(session({
name:'codiel',
//TODO change the secret before deployment in production
secret:'blahblah',
//identity is not yet stablised so as to not save unwanted cookie set to false
saveUninitialized:false,

resave:false,
cookie:{
    maxAge:(1000*60*100)
},
store: MongoStore.create({
    mongoUrl: "mongodb://localhost/codeial_development",
    autoRemove: "disabled",
  }),
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){console.port(err);}
    
    console.log(`running on ${port}`)
})

module.exports=db;