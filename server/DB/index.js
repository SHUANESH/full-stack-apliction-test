const mongoose = require('mongoose');

const URL_DB = process.env.URL_DB;


 mongoose.connect(URL_DB, {

console.log(URL_DB);

 mongoose.connect(URL_DB, {

    useUnifiedTopology: true,
    useNewUrlParser: true,
 }) 
 .then(() => { console.log("connecting success")})
 .catch((error)=>{console.error("error connecting! "); })


module.exports = mongoose.connection;
