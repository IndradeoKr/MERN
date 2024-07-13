require('dotenv').config()

const mongoose=require('mongoose')
const express=require('express')
const workout=require('./routes/workout')


// creating app
const app=express()

//middile ware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// app.get('/',(req,res)=>{
//     res.json({msg:"welcome back bro"})
// })

// its similar to app.get()
app.use('/api/workouts',workout)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('connected to db and started server',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})

// process is a global object available in node application
// app.listen(process.env.PORT,()=>{
//     console.log('started',process.env.PORT)
// })