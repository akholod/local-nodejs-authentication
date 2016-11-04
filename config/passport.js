/**
 * Created by andrey on 31.10.16.
 */
'use strict';
let LocalStrategy = require('passport-local').Strategy;
let User = new require('../schemas/user');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            // override new local strategy with email and passport
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {
            process.nextTick(function() {
                User.findOne({'local.email':  email }, function(err, user) {
                    console.log('strategy check');
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'Ololo! email is already taken.'));
                    } else {

                        var newUser = new User();

                        // set the user's local credentials
                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);

                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });

            });
        }));

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) { // callback with email and password from our form

            //checking to see if the user trying to login already exists
            User.findOne({ 'local.email' :  email }, function(err, user) {
                // if there are any errors, return the error before anything else
                if (err)
                    return done(err);

                // if no user is found, return message
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'Ololo, User no found.'));


                // if the user is found but the password is wrong, return message
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Ololo! Wrong password.')); //

                return done(null, user);
            });

        }));

};