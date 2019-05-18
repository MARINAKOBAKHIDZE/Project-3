var passport = require("passport");
var LocalStragtegy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStragtegy(

    // Telling passport we want to use a local strategy 
    // we want and emial and password to be to login
    {
        usernameField: "email"
    },
    function(email, password, done){

        db.User.findOne({

            where: {
                email: email 
            }
        }).then(function(dbUser){

            // if there's no user with the given email
            if (!dbUser){
                return done(null, false,{
                    message: "incorrent email."
                });
            }

            // if there's a user with a given email, but the passwors is incorrect
            else if (!dbUser.validPassword(password)){

                return done(null,false,{

                    message: "Incorrect password."
                });

            }
            return done(null, dbuser);
        });
    }


));

//helps keep aunthentication state across HTTP req,
// // Sequelize needs to serialize and deserialize the user
passport.serializeUser(function (user, cb){
    cb(null, user);
});

passport.deserializeUser(function(obj, cb){
cb(null, obj);
});


module.exports = passport;