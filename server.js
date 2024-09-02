let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.listen(1234,()=>{
    console.log("Listening to port 1234");
});

app.get("/Actors",(req,res)=>{
    let actorsArr = ["Prabhas","Nani","NTR"];
    res.json(actorsArr);
});