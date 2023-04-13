const express = require("express");
// const req = require("express/lib/request");
const app = express();
const mongoose = require("mongoose");


//database 
const database = module.exports = async() => {
     const connectParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
     }
     try {
        mongoose.connect(
            "mongodb://0.0.0.0:27017",
        connectParams
        );
      
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log(error);
        console.log("Database Not Connected Successfully");
     }
}
database();


//middleware

app.use(express.urlencoded({
    extended:true
}));

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.json());

// routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(5000,()=>{
    console.log("Server is running on port 3000" );
});