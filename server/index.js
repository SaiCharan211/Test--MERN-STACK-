import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import EmployeeModel from './Employee.js'

const app=express()
app.use(express.json())
app.use(cors())

// client in server


mongoose.connect("mongodb://localhost:27017/employee")
app.get('/',(req,res)=>{
    res.send(req.body)
})

app.post('/login',(req,res)=>{
    const {email, password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("The Password is incorrect")
            }
        }else{
            res.json("No Record Found")
        }
    })
})

app.post('/',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})


app.listen(3021,console.log("server running"))
