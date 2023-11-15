const express = require('express')
const mysql = require('mysql')
const app = express()
const bodyparser = require('body-parser')
const port = 5000

app.use(express.json())

// db connection 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecomm-database'
})
// database error handling 
db.connect((err)=>{
    if(err){
        console.log(`database connection error: `+err.message);
    }console.log("database connected sucessfully")
})

// api generate 
app.get('/api/login',(req,res)=>{
    res.send('login page')
})
// display the data 
app.get('/data',(req,res)=>{
    const GetData = 'SELECT * FROM `user`';
    db.query(GetData, (error,result)=>{
        if(error){
            console.log(error);
            res.status(500).send('database error')
        }else{
            res.json(result)
        }
    })
})
// creat the user page
app.post('/api/signup',(req,res)=>{
    res.send("reger the user name")
})
// root directry
app.get('/',(req,res)=>{
    res.send('home')
})
app.listen(port,()=>{console.log("server started")})