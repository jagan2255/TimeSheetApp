const express = require("express");
const app = express();
const cors=require("cors");
const mongoose= require('mongoose');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const adminRoutes=require("./Src/Routes/Admin");
const userRoutes =require("./Src/Routes/User")



//DB Connection

mongoose
  .connect("mongodb://localhost:27017/Timesheet" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });




app.use("/admin", adminRoutes);
app.use("/user" , userRoutes);




  app.listen( PORT , (req,res)=>{
    console.log(`Server Running on ${PORT}`)
 })