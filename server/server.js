const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./DB/index');
const express = require('express');
const cors = require('cors');

const app = express();

const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());
const newsUserRoute = require('./routes/UserRouting')
connectDB.on('error' ,() => {
    console.log(("error"));
})
const PORT = process.env.PORT || 8080;

app.use('/user' ,newsUserRoute);

app.listen(PORT ,(error) => {
    if(error) return "error"
      console.log("we're on air");
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../client/build','index.html'))
})
}