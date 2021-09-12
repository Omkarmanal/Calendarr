const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = 'mongodb+srv://Psykick:Omkarmanal@mycalendar.b9qv1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})

mongoose.connection.on('connected', ()=>{
    console.log("connected");
})
// app.use(express.json());
// app.use(express.urlencoded({ extended:false })); //available to request body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());
app.use(morgan('tiny'));
app.use('/api', routes);

app.set("view engine", "ejs");
// app.set("views",path.resolve)

app.listen(PORT,console.log(`server is starting at ${PORT}`))

// Saving data to our mongo database
// const data = {
//     title:"omkar",
//     body:"helo"
//  };
// const newBlogPost = new BlogPost(data); 
//instance of the model

// newBlogPost.save((error)=>{
//      if(error){
//          console.log("Opps, somethig happend");
//      }else{
//          console.log("Data has been saved");
//      }
//  })
 //.save()

// HTTP logger

