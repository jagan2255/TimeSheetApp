const express = require('express')
const router = express.Router();
const bcrypt = require("bcrypt");
const userdata = require('../Model/UserSchema');
const dailydata = require('../Model/DailySchema');
const saltRounds = 10;



router.post("/userlogin" , (req,res)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
    var user =req.body.data
  
    console.log(user.email , user.password );
  
    userdata.findOne({email:user.email.trim()})
    .then((data)=>{
  
      //console.log(data.id); 
      if(data===null){
          res.send({ status: false, data: 'Invalid Username and Password'})
      }else { 
        console.log(data)
          bcrypt.compare(user.password , data.password , function(err, result) {
            if (result) {
              console.log(result)
             var email= data.email
              res.send({ status: true, data: 'Success' , email})
           }
           else{
                res.send({ status: false, data: 'Incorrect Username or Password'})
            }
        });
      }
    });
  });


  router.post("/checkdata" , (req,res)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    var data = req.body.data;
    console.log(data)

    dailydata.findOne({email:data.email , date:data.date}).then((data)=>{

      if(data===null){
        res.send({ status: true, message: 'Task Started'})
      }
      else{
        res.send({ status: false, message: 'You have Done the Task'})
      }

    })
  
  })


  router.post("/submittask" , (req,res)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    var data =req.body.data;
    console.log(data)

    var stime = data.stime;
    var etime = data.etime;

    var diff =(etime - stime) / 1000;
    diff /= (60);
    var minutes = Math.abs(diff);

    console.log(minutes)


    dailydata.findOne({email:data.email , date:data.date})
    .then((result)=>{
      if(result===null){
  
        var addevent = {
            email:data.email,
            date: data.date,
            minutes:minutes,
         }

        var addevents = new dailydata(addevent);
        addevents.save();
        res.send({ status: true, data: 'Success' })
      }
      else{
        console.log("Already Submitted Task")
        res.send({ status: false, data: 'Already Submitted Task' })
      }

    })
    
  })





  module.exports=router;