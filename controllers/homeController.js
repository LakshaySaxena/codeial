module.exports.home= function(req,res){
//return res.end('<h1>Express is up<h1>');

// edited cookie value from chrome>>pplication and printed to see
console.log(req.cookies);

//changing user1 cookie value to 33
res.cookie('user1', 33);
return res.render('home',{
    title: "Codeial"
});
}

module.exports.welcome= function(req,res){
    return res.end('<h1>Welcome!!!<h1>');
    }