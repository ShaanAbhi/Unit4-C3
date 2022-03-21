const app = require("./index");

const connect = require("./configs/db")

app.listen(5400,async function(){
    try {
        
    } catch (error) {
        console.log("listening on port 5400")
    }
})