module.exports.home= function(req,res){
//return res.end('<h1>Express is up<h1>');

return res.render('home',{
    title: "Codeial"
});
}

module.exports.welcome= function(req,res){
    return res.end('<h1>Welcome!!!<h1>');
    }