const mongoose = require('mongoose')
const UserModel = mongoose.model('User')

let getAllUser = (req,res) => {
    UserModel.find((err,result)=>{
        if(err){
            res.send("Error occured")
        }else{
            let apiResponse = {
                data:result
            }
            res.send(apiResponse)
        }
    })
}

let createUser = (req,res) => {
    console.log(req.body)
    let newUser = new UserModel({
        name:req.body.name
    })

    newUser.save((err,result)=>{
        if(err){
            res.send("Error occured")
        }else{
            res.send(result)
        }
    })
}

let updateUser = (req,res) => {
    let update = {
        name:req.body.updateName
    }

    console.log(req.body)

    UserModel.updateOne({name: req.body.name || req.params.name || req.query.name}, update,(err,result)=>{
        if(err){
            console.log(err+" @ updateOne")
            res.send("Error occured")
        }else if(result.nModified === 0){
            console.log(result)
            res.send("No user Found")
        }else{
            console.log(result)
            res.send(result)
        }
    })
}

let deleteUser = (req,res) => {
    console.log(req.body)
    UserModel.deleteOne({name:req.body.name || req.params.name || req.query.name},(err,result)=>{
        if(err){
            console.log(err)
            res.send("Error occured")
        }else{
            console.log(result)
            res.send("Deleted")
        }
    })
}


module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser
}