const approuter = require('express').Router();
const bcrypt = require("bcrypt");
const User = require('../models/adminModel');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const { application } = require('express');

const jwt = require('jsonwebtoken')

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  process.nextTick(function() {
  done(null, user._id);
});
});

passport.deserializeUser(function(id, done) {
    process.nextTick(function() {
          User.findById(id, function(err, user) {
            done(err, user);
            console.log("error"+err);
            console.log("user"+user);
          });
});
});
approuter.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));
approuter.post("/register",async function(req,res){
  try{
    const plainPassword = req.body.password;
    const hashPassword = bcrypt.hashSync(plainPassword, 7);
    const newItem = new User({
        
        username: req.body.username,
        password: hashPassword
    })
    // save
    const save = await newItem.save()
    console.log(newItem);

    res.status(200).json(newItem);
} catch (error) {
    res.json(error)
    
}
})
approuter.post("/adminLogin",async function(req,res){
  try{
    const reqEmail = req.body.email;
        const reqPassword = req.body.password;
        console.log(reqEmail);
        const item = await User.findOne({email: reqEmail});
        if(item === null){
            res.json("no")
        }else{
        const savePassword = item.password;
        if(bcrypt.compareSync(reqPassword, savePassword) === true){
                res.status(200).json(reqEmail)
        }else if(bcrypt.compareSync(reqPassword, savePassword) === false){
            res.json("false");
        }
    }
} catch (error) {
    res.json(error)
    
}
})
module.exports = approuter;