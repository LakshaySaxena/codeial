const User = require('../models/user');
module.exports.profile = function(req, res){
   User.findById(req.params.id, function(err, user){
       return res.render('userProfile', {
           title: 'User Profile',
           profile_user: user
       });
   });

}

module.exports.update = function(req, res){
   if(req.user.id == req.params.id){
       User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
           return res.redirect('back');
       });
   }else{
       return res.status(401).send('Unauthorized');
   }
}




module.exports.signup= function(req,res){

   if(req.isAuthenticated()){
      return res.redirect('/users/profile');
   }

   return res.render('signup',{
      title: "signup Page"
   });
}


module.exports.login= function(req,res){

   if(req.isAuthenticated()){
      return res.redirect('/users/profile');
   };

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
   req.flash('sucess','logged in successfully');
   return res.redirect('/');
}


module.exports.DestroySession=function(req,res,next){
   req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('sucess','logged out successfully');
      res.redirect('/'); });
}


//depreciated code
// module.exports.DestroySession=function(req,res,next){
//       req.logout();
//       req.flash('sucess','logged out successfully');
//          res.redirect('/'); 
//    }