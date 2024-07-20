const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const UserModel = require("./models/Userdata")
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/UDAYAGIRI");

app.post('/login',(req,res)=>{
   const{email,password}=req.body;
   UserModel.findOne({email:email})
   .then(user=>{
     if(user){
        if(user.password===password){
            res.json("Success");
        }else{
            res.json("password is incorrect");
        }
     }
     else{
        res.json("user not found");
     }
   })
})
app.post('/register', (req, res) => {
    const{email,password}=req.body;
   UserModel.findOne({email:email})
   .then(user=>{
     if(user){
        res.json("user already found");
     }
     else{
        UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));
     }
   })
});

app.listen(3001,()=>{
    console.log("server is running..");
})
