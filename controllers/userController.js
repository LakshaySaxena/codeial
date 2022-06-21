const User = require('../models/user');
module.exports.profile = function(req, res){
   // res.end('<h1>User Profile</h1>');

   return res.render('userProfile',{
        title: "Lakshays Profile"
   });
}


module.exports.signup= function(req,res){

   return res.render('signup',{
      title: "signup Page"
   });
}


module.exports.login= function(req,res){

   return res.render('login',{
      title: "login Page"
   });
}

module.exports.create = function(req, res){
   if (req.body.password != req.body.confirm){
      
      return res.redirect('back');
  }

  User.findOne({email: req.body.email}, function(err, user){
      if(err){console.log('error in finding user in signing up'); return}

      if (!user){
          User.create(req.body, function(err, user){
              if(err){console.log('error in creating user while signing up'); return}

             
              return res.redirect('/users/login');
          })
      }else{
        
          return res.redirect('back');
      }

  });
}


module.exports.createsession=function(req,res){
   
}