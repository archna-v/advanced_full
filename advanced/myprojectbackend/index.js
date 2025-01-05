var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var app =  express()
var User = require('./models/users')
const PORT = 3003
app.use(express.json())
mdb.connect("mongodb://localhost:27017/").then(()=>{
    console.log("Mongodb connection successful")
}).catch(()=>{
    console.log("Check ur connection string")
})
app.get('/',(req,res)=>{
    res.send("welcome to backend hiji")
})
app.get('/static',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.get('/next',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'/next.html'))
})
app.get('/getsignup',async(req,res)=>{
    try{
    var allSignupRecords = await User.find()
    res.json(allSignupRecords)
    console.log("all record fetched")
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})
app.post('/signup',async(req,res)=>{
    console.log(req.body)
    var {firstName,lastName,email,password}=req.body
    console.log(firstName,lastName,email);
    try{
       // var newUser = new User({
       //     firstName:firstName,
        //    lastName:lastName,
        //    email:email
       // })
       var newUser = new User(req.body)
       console.log(req.body.password)
        newUser.save()
        console.log("user added sucessfully")
       res.status(200).send("User added sucessfully")
    }
    catch(err){
     console.log(err)
    }
    
})
app.post('/login',async(req,res)=>{
    var {email,password} = req.body
    try{
            var existingUser = await User.findOne({email:email})
            //console.log(existingUser)
            if(existingUser)
            {
                if(existingUser.password !== password)
                {
                res.json({message:"invalid credentials",isloggedIn:false})
                }
                else{
                    res.json({message:"login sucessful",isloggedIn:true})
                }
            }
            else{
                console.log("inside else")
                
                res.json({message:"login failed",isloggedIn:false})
            }
          //  res.json({message:"login successful",isloggedIn:true})
    }
    catch(err){
        console.log("login failed")
    }

})
app.get('/json',(req,res)=>{
    res.json({server:"welcome to backend",url:"localhost",port:PORT})
})
app.listen(PORT,()=>{
    console.log(`Server started\nUrl: http://localhost:${PORT}`)
})
