const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require('cors');
app.use(cors);

require('dotenv').config();

var dbUrl = process.env.DATABASE_URL 

const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect(dbUrl,{useNewUrlParser: true , useUnifiedTopology: true})
.then(
    console.log('MongoDb connected !')
    
)
.catch(err => console.log ("error :" +err));

const port = process.env.PORT
const methodOverride = require('method-override');
app.use(methodOverride('_method'));



const server = app.listen(5000,function (){
console.log('listening on port 5000');


})












































































