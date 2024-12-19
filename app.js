const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const doctenv = require('dotenv')
const route = require('./src/routes/userRoute')
const app = express();

app.use(bodyParser.json())
doctenv.config();

app.use('/api/user',route)
const PORT = process.env.PORT || 5000

const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("DataBase Connected")
}).catch((err)=>{
    console.log(err)
}
)

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})


module.exports= app;