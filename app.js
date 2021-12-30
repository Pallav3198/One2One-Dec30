const express = require('express');
const CredentialsModel = require("./models").Credentials;
const userModel = require('./models').userDetails;
const app = express();
app.use(express.json())
const PORT = 8087;
app.get("/",(req,res)=>{
    res.status(200).json({
        status:1,
        message:"Welcome to the Homepage"
    })
});
// insert some data into the users and credentials table
// let userInstance = userModel.build({force:true},{
//     "id": 2,
//     "name":"Ram  Kumar",
//     "phoneNumber":9990772619
// }).save();
// let credentialInstance = CredentialsModel.build({
//     "id":1,
//     "emailId":"pallav3198@gmail.com",
//     "userId":1
// }).save();
app.get("/users",(req,res)=>{
    userModel.findAll().then((data)=>{
        res.status(200).json({
            status:1,
            data:data
        });
    }).catch((err)=>{
        res.status(500).json({
            status:0,
            message:'There is some error'
        })
    })
});
// credentials
app.get("/credentials",(req,res)=>{
    CredentialsModel.findAll().then((data)=>{
        res.status(200).json({
            status:1,
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            status:0,
            message:"There is some error while fetching data"
        })
    })
});
app.listen(PORT,(req,res)=>{
    console.log("Application has started on port "+PORT);
})