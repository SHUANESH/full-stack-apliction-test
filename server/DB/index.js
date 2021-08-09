const mongoose = require('mongoose');

const URL_DB = process.env.URL_DB;

console.log(URL_DB);

 mongoose.connect("mongodb+srv://shuaneshAbaba:SH1470ab@tmcluster.jkepk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
 }) 
 .then(() => { console.log("connecting success")})
 .catch((error)=>{console.error("error connecting! "); })


module.exports = mongoose.connection;
