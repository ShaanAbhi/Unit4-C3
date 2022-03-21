const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://abhinandanshaan:6154@cluster0.94f1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
};