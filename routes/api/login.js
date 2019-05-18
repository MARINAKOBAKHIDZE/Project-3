// var db = require("../../models");
// var passport = require("../../config/passport");
// var userController= require("../../controllers/userController");
// const router = require("express").Router();
// // module.exports = function(app){
// //  // Using the passport.authenticate middleware with our local strategy.
// //   // If the user has valid login credentials, send them to the members page.
// //   // Otherwise the user will be sent an erro

// //     app.post("/api/login", passport.authenticate("local"), function (req, res){
    
// //     res.json("/members");
// // });

// // app.post("/api/signup", function(req, res){
// //     console.log(req.body);
// //     //populating the rows from the users input
// //     db.User.create({
// //         email: req.body.email,
// //         password: req.body.password
// // //redirecting to user 
// //     }).then(function(){
// //         res.redirect(307, "/api/login")
// //     }).catch(function(err){
// //         console.log(err);
// //         res.json(err);
// //     });
// // });

// // //route for user to logout
// // app.get("logout", function(req, res){
// //     req.logout();
// //     res.redirect("/");
// // });

// // // route for getting data from the user to be used client side
// // app.get("/api/user_data", function(req, res ){

// //     if(!req.user){
// //       // The user is not logged in, send back an empty object
// //         res.json({});
// //     }
// //     else {
// //          // Otherwise send back the user's email and id
// //       // Sending back a password, even a hashed password, isn't a good idea
// //         res.json({
// //             email: req.user.email,
// //             id: req.user.id
// //         });

// //     }
// // });
// // }

// router.route("/")
// .get(userController.findAll)
// .post(userController.create);
