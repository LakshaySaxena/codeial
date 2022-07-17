const Post = require('../models/post');
const User = require('../models/user');





//module.exports.home= function(req,res){
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

// module.exports.home= function(req,res){
//     Post.find({})
//     .populate('user')
//     .populate({
//         path: 'comments',
//         populate:{
//             path: 'user'
//         }
//     })
//     .exec(function(err, posts){

//         User.find({}, function(err, users){
//         return res.render('home', {
//             title: "Codeial | Home",
//             posts:  posts,
//             all_users: users
//         });
//         });
//     })

// }

//making above as async wait

module.exports.home = async function(req, res){

    try{
         // populate the user of each post
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });
    
        let users = await User.find({});

        return res.render('home', {
            title: "Codeial | Home",
            posts:  posts,
            all_users: users
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}


module.exports.welcome= function(req,res){
    return res.end('<h1>Welcome!!!<h1>');
    }

    