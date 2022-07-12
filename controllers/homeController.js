const Post = require('../models/post');
module.exports.home= function(req,res){
//return res.end('<h1>Express is up<h1>');

// edited cookie value from chrome>>pplication and printed to see
// console.log(req.cookies);

// //changing user1 cookie value to 33
// res.cookie('user1', 33);
// Post.find({}, function(err, posts){
//         return res.render('home', {
//             title: "Codeial | Home",
//             posts:  posts
//         });
//     });

    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate:{
            path: 'user'
        }
    })
    .exec(function(err, posts){
        return res.render('home', {
            title: "Codeial | Home",
            posts:  posts
        });
    })

}

module.exports.welcome= function(req,res){
    return res.end('<h1>Welcome!!!<h1>');
    }

    