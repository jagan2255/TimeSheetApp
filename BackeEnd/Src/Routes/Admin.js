const express = require('express')
const router = express.Router();
const bcrypt = require("bcrypt");
const userdata = require('../Model/UserSchema');
const userlistdata = require('../Model/Userlist');
const dailydata = require('../Model/DailySchema');

const saltRounds = 10;


router.post("/adminlogin" , (req,res)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    var user = req.body.data;
    console.log(user)
    if((user.email==="admin@gmail.com")&&(user.password==="admin@123")){
        res.send({ status: true, data: 'Success'})
    }else{
        res.send({ status: false, data: 'Incorrect Username or Password'})
    }

})




router.post("/adduser" , (req,res)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
        var user = req.body.data;
  
        const salt = bcrypt.genSaltSync(saltRounds);
        const pssd = bcrypt.hashSync(user.password, salt);
  
        userdata.findOne({email:user.email.trim()})
        .then((data)=>{
        if(data===null){
  
          var adduser = {
              email:user.email,
              username:user.username,
              password:pssd,
           }
  
          var adduser = new userdata(adduser);
          adduser.save();

          var userlist = {
            email:user.email,
            username:user.username,
          }

          var userlists = new userlistdata(userlist);
          userlists.save();


          res.send({ status: true, data: 'Success' })
        }
        else{
          console.log("Email already taken")
          res.send({ status: false, data: 'Email already taken' })
        }
       })
  
  });



  router.get("/getusers" , (req,res)=>{
    userlistdata.find().then((data)=>{
        res.send(data)
     })
  })


  router.get("/getusersdetails/:id" , (req,res)=>{
    var id = req.params.id
    dailydata.find({email:id}).sort({"date": -1}).then((data)=>{
        console.log(data)
        res.send(data)
    })
    

  })



 






  module.exports=router;